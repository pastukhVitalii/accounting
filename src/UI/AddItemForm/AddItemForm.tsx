import React, {useState} from 'react';
import {IconButton} from '@material-ui/core';
import {MyDate} from "../Date/Date";
import MyInput from "../Input/Input";
import {MySelect} from "../Select/Select";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {ExpenseType} from "../../BLL/types/entities";

type AddItemFormPropsType = {
    addItem: (expenses: ExpenseType) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    console.log("AddItemForm called");

    let [titleExpenses, setTitleExpenses] = useState("expenses");
    let [titlePrice, setTitlePrice] = useState("45");
    let [error, setError] = useState<string | null>(null);

    const addTitleE = (title: string) => {
        setTitleExpenses(title);
    }

    const addTitleP = (title: string) => {
        setTitlePrice(title);
    }

    const addItemHandlerE = () => {
        console.log(titleExpenses, titlePrice, currency);
        console.log(selectedDate?.toLocaleDateString('ru'));
        const id = '1233';
        props.addItem({id: id, name: titleExpenses, price: titlePrice, currency: currency})
    }

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2020-12-14T21:11:54')
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const [currency, setCurrency] = React.useState('USD');
    const handleChange = (value: string) => {
        setCurrency(value);
    };

    return <>
        <MyDate selectedDate={selectedDate} handleDateChange={handleDateChange}/>
        <MyInput label={'Expenses'} title={titleExpenses} setTitle={setTitleExpenses} error={error} setError={setError}
                 addTitle={addTitleE}/>
        <MyInput label={'Price'} type={'number'} title={titlePrice} setTitle={setTitlePrice} error={error}
                 setError={setError} addTitle={addTitleP}/>
        <MySelect currency={currency} handleChange={handleChange}/>
        <span>
            <IconButton aria-label="add" onClick={addItemHandlerE}>
                <AddCircleOutlineIcon color={'primary'} fontSize="small"/>
            </IconButton>
        </span>
        {/*<TextField variant="outlined"
                   error={!!error}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   label="Title"
                   helperText={error}
        />
        <IconButton color="primary" onClick={addItemHandler}>
            <AddBox />
        </IconButton>*/}
    </>
})
