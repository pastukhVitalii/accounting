import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {MyDate} from "./Date";

export default {
    title: 'Example/Date',
    component: MyDate,
} as Meta;

export const Date = () => {
    return <>
        <MyDate/>
    </>
}

