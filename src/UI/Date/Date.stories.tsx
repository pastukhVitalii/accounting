import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {MyDate} from "./Date";
import {actions} from "@storybook/addon-actions";

export default {
    title: 'Example/Date',
    component: MyDate,
} as Meta;

/*export const Date = () => {
    return <>
        <MyDate handleDateChange={actions('date')} selectedDate={{date: '12.14'}/>
    </>
}*/

