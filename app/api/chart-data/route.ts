import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
    const supabase = createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get date 30 days ago
    const date = new Date()
    date.setDate(date.getDate() - 30)
    const dateString = date.toISOString().split('T')[0]

    const { data: transactions, error } = await supabase
        .from('transactions')
        .select(`
      amount,
      date,
      category:categories (
        type
      )
    `)
        .gte('date', dateString)
        .order('date', { ascending: true })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Group by date
    const groupedData: Record<string, { date: string; income: number; expense: number }> = {}

    transactions?.forEach((t: any) => {
        const d = t.date
        if (!groupedData[d]) {
            groupedData[d] = { date: d, income: 0, expense: 0 }
        }

        const amount = Number(t.amount)
        if (t.category?.type === 'income') {
            groupedData[d].income += amount
        } else {
            groupedData[d].expense += amount
        }
    })

    // Fill in missing days (optional, skipped for brevity, but good for charts)
    // For now return existing data points
    const chartData = Object.values(groupedData).sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    )

    return NextResponse.json(chartData)
}
