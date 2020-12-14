import React, {useCallback} from 'react';
import {createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";

type SelectType = {
    currency: string
    handleChange: (value: string) => void
}

export const MySelect = React.memo( (props: SelectType) => {
    console.log('Select');

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }),
    );

    const classes = useStyles();

    const onChange = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        props.handleChange(event.target.value as string);
        console.log(event.target.value as string);
    }, [props.handleChange]);

    return (
        <>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.currency}
                    defaultValue={props.currency}
                    onChange={onChange}
                    label={'Currency'}
                >
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={'PLN'}>PLN</MenuItem>
                    <MenuItem value={'UA'}>UA</MenuItem>
                </Select>
            </FormControl>
        </>
    );
})

