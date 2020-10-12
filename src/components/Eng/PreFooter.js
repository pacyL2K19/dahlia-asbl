import React from 'react';
import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import dotenv from 'dotenv';
// dotenv.config();

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
        display : 'flex',
        flexDirection : 'row'
    }
}));

const PreFooter = () => {
    const classes = useStyles ()
    return (
        <div id = 'pre-footerE'>
            <Grid container>
                <Grid 
                    item
                    xs = {12}
                    md = {6}
                    lg = {6}
                    xl = {6}
                >
                    <h2>Subscribe to newsletter</h2>
                </Grid>
                <Grid 
                    item
                    xs = {12}
                    md = {6}
                    lg = {6}
                    xl = {6}
                >
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basicE" label="Mail" variant="outlined" placeholder = 'Enter votre adresse mail'/><div className = 'btnNew'>Subscribe</div>
                        {/* <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} /> */}
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default PreFooter;