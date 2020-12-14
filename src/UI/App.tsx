import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../BLL/store";
import {ExpensesDateType, ExpenseType} from "../BLL/types/entities";
import {MyAccordion} from "./Accordion/Accordion";
import {Container, Grid} from "@material-ui/core";
import {AddItemForm} from "./AddItemForm/AddItemForm";

function App() {

    // @ts-ignore
    const expenses = useSelector<AppStateType, Array<ExpensesDateType>>(state => state.expensesR.expenses);

    const addItem = (expenses: ExpenseType) => {
        console.log(expenses);
    }

    return (
        <Container fixed>
            <Grid container justify={'center'} style={{marginTop: '50px'}}>
                <AddItemForm addItem={addItem}/>
                {expenses.map(e => <MyAccordion key={e.id} id={e.id} date={e.date} expenses={e.expenses}/>)}
            </Grid>
        </Container>
    );
}

export default App;
