import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../BLL/store";
import {ExpensesDateType} from "../BLL/types/entities";
import {MyAccordion} from "./Accordion/Accordion";
import {MyDate} from "./Date/Date";
import {Container, Grid} from "@material-ui/core";
import {MySelect} from "./Select/Select";

function App() {

    const expenses = useSelector<AppStateType, Array<ExpensesDateType>>(state => state.expensesR.expenses);

    return (
        <Container fixed>
            <Grid container justify={'center'}>
                <MyDate/>
                <MySelect/>
                {expenses.map(e => <MyAccordion key={e.id} id={e.id} date={e.date} expenses={e.expenses}/>)}
            </Grid>
        </Container>
    );
}

export default App;
