import {combineReducers, createStore} from "redux";
import expensesReducer from "./expensesReducer";

let rootReducer = combineReducers({
    expensesR: expensesReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);
export default store;

// @ts-ignore
window.store = store