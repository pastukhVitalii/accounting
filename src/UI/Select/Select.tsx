import React from 'react';
import {createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";

export const MySelect = React.memo( () => {
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

    // const dispatch = useDispatch();
    /*const handleChange = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        setStatus(event.target.value as string);
    }, [statusApi, dispatch]);*/
    const [currency, setCurrency] = React.useState('USD');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCurrency(event.target.value as string);
    };

    return (
        <>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={10}
                    defaultValue={currency}
                    onChange={handleChange}
                    label={'Currency'}
                >
                    <MenuItem value={10}>USD</MenuItem>
                    <MenuItem value={40}>PLN</MenuItem>
                    <MenuItem value={30}>UA</MenuItem>
                </Select>
            </FormControl>
        </>
    );
})

