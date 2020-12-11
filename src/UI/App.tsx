import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../BLL/store";
import {ExpensesDateType} from "../BLL/types/entities";
import {MyAccordion} from "./MyAccordion/MyAccordion";

function App() {

    const expenses = useSelector<AppStateType, Array<ExpensesDateType>>(state => state.expensesR.expenses);

    return (
        <div className="App">
            {expenses.map(e => <MyAccordion key={e.id} id={e.id} date={e.date} expenses={e.expenses}/>)}
        </div>
    );
}

export default App;
