import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ExpenseType} from "../../BLL/types/entities";
import {FormControlLabel, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

type MyAccordionType = {
    id: string,
    date: string,
    expenses: Array<ExpenseType>
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '70%',
            margin: '10px'
        },

    }),
);

export const MyAccordion = (props: MyAccordionType) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon alignmentBaseline={"after-edge"}/>}
                    id="panel1a-header"
                >
                    <FormControlLabel
                        // onClick={(event) => event.stopPropagation()}
                        onClick={() => alert('click!')}
                        control={<IconButton aria-label="delete">
                            <DeleteIcon/>
                        </IconButton>}
                        label={props.date}
                    />
                </AccordionSummary>
                {props.expenses.map(e => <AccordionDetails key={e.price}>
                    <Typography>{`${e.name} ${e.price} ${e.currency}`}</Typography>
                </AccordionDetails>)}
            </Accordion>
        </div>
    );
}