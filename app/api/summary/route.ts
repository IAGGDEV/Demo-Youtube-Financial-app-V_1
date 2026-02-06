import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
    const supabase = createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch all transactions to calculate balance and monthly stats
    // In a production app with millions of rows, use a Postgres function (RPC) for this.
    const { data: transactions, error } = await supabase
        .from('transactions')
        .select(`
      amount,
      date,
      category:categories (
        type
      )
    `)

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    let totalBalance = 0
    let monthlyRevenue = 0
    let monthlyExpenses = 0

    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    transactions?.forEach((t: any) => {
        const amount = Number(t.amount)
        const type = t.category?.type
        const tDate = new Date(t.date)

        if (type === 'income') {
            totalBalance += amount
            if (tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear) {
                monthlyRevenue += amount
            }
        } else if (type === 'expense') {
            totalBalance -= amount
            if (tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear) {
                monthlyExpenses += amount
            }
        }
    })

    return NextResponse.json({
        totalBalance,
        monthlyRevenue,
        monthlyExpenses
    })
}
