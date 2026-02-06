import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const transactionSchema = z.object({
    amount: z.number().positive(),
    description: z.string().min(1),
    date: z.string(), // ISO Date string
    category_id: z.string().uuid(),
    status: z.enum(['pending', 'completed']).optional(),
    attachment_url: z.string().optional(),
})

export async function GET(request: NextRequest) {
    const supabase = createClient()
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data, count, error } = await supabase
        .from('transactions')
        .select(`
      *,
      category:categories (
        id, name, type, color_code
      )
    `, { count: 'exact' })
        .order('date', { ascending: false })
        .range(offset, offset + limit - 1)

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
        data,
        meta: {
            page,
            limit,
            total: count,
            totalPages: count ? Math.ceil(count / limit) : 0
        }
    })
}

export async function POST(request: NextRequest) {
    const supabase = createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const json = await request.json()
        const body = transactionSchema.parse(json)

        const { data, error } = await supabase
            .from('transactions')
            .insert({
                user_id: user.id,
                ...body
            })
            .select()
            .single()

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json(data)
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json({ error: err.errors }, { status: 400 })
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
