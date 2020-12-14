import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);
type PropsType = {
    label: string
    type?: string
    title: string
    setTitle: (title: string) => void
    error: string | null
    setError: (error: string | null) => void
    addTitle: (value: string) => void
}

export default function MyInput(props: PropsType) {
    const classes = useStyles();

    const onChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.currentTarget.value;
        console.log(value);
        props.addTitle(value);
    };

    /*const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    };*/
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic"
                       error={!!props.error}
                       value={props.title}
                       label={props.label}
                       variant="outlined"
                       type={props.type}
                       // onKeyPress={onKeyPressHandler}
                       helperText={props.error}
                       onChange={onChange}/>
        </form>
    );
}