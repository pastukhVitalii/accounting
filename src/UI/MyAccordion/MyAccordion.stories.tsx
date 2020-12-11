import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {MyAccordion} from "./MyAccordion";

export default {
    title: 'Example/Accordion',
    component: MyAccordion,
} as Meta;

let date = '12.12.2020';
let id = '1';
let expenses = [
    {id: '21', name: 'Milk', price: '12', currency: "USD"},
    {id: '22', name: 'Chocolate', price: '10.5', currency: "USD"},
];

export const MyAccordion1 = () => {

    return <>
        <MyAccordion date={date} id={id} expenses={expenses}/>
    </>
}

