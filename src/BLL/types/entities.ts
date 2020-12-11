export type ExpensesDateType = {
    id: string,
    date: string,
    expenses: Array<ExpenseType>
}

export type ExpenseType = {
    id: string,
    name: string,
    price: string,
    currency: string,
}