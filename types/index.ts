export type Profile = {
    id: string
    full_name: string | null
    avatar_url: string | null
    updated_at: string | null
    created_at: string
}

export type CategoryType = 'income' | 'expense'

export type Category = {
    id: string
    user_id: string
    name: string
    type: CategoryType
    color_code: string | null
    created_at: string
}

export type TransactionStatus = 'pending' | 'completed'

export type Transaction = {
    id: string
    user_id: string
    category_id: string | null
    amount: number
    description: string | null
    date: string
    status: TransactionStatus
    attachment_url: string | null
    created_at: string
    // Joined fields
    category?: Category
}

export type DashboardSummary = {
    totalBalance: number
    monthlyRevenue: number
    monthlyExpenses: number
}
