import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {MySelect} from "./Select";

export default {
    title: 'Example/Select',
    component: MySelect,
} as Meta;

export const Select = () => {
    return <>
        <MySelect/>
    </>
}

