import React from 'react';
import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const PreFooter = () => {
    const classes = useStyles ()
    return (
        <div id = 'pre-footer'>
            <Grid container>
            <Grid 
                    item
                    xs = {12}
                    md = {6}
                    lg = {6}
                    xl = {6}
                >
                    <h2>Souscrivez à notre Newsletter</h2>
                </Grid>
                <Grid 
                    item
                    xs = {12}
                    md = {6}
                    lg = {6}
                    xl = {6}
                >
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Mail" variant="outlined" placeholder = 'Enter votre adresse mail'/><span>Souscrire</span>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default PreFooter