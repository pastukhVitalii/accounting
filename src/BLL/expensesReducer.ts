import {ExpensesDateType, ExpenseType} from "./types/entities";

export type initialStateType = {
    expenses: Array<ExpensesDateType>
}

export const initialState: initialStateType = {
    expenses: [
        {
            id: '1', date: '12.12.2020', expenses: [
                {id: '11', name: 'Banana', price: '5', currency: "USD"},
            ]
        },
        {
            id: '2', date: '10.12.2020', expenses: [
                {id: '21', name: 'Milk', price: '12', currency: "USD"},
                {id: '22', name: 'Chocolate', price: '11', currency: "USD"},
            ]
        }
    ]
}

const expensesReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-EXPENSE':
return {
    ...state, expenses: [action.expense, ...state.expenses]};
        default:
            return state
    }
    return state
}

export default expensesReducer;

// Action
export const addExpenseAC = (expense: ExpenseType) => ({type: 'ADD-EXPENSE', expense} as const)
export type AddExpenseActionType = ReturnType<typeof addExpenseAC>;

type ActionType = AddExpenseActionType;

