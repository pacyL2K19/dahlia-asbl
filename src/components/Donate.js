import React from 'react';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

export const Donate = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: ''
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    return(
        <div id = 'donateField'>
            <h2 style = {{color : '#fffeee', textAlign : 'center'}}>FAITES UN DON</h2>
            <p style = {{ color : '#dddddd'}}>
                Veuillez entrer le montant
            </p><br />
            <FormControl style = {{ color : 'white'}} fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={60}
                />
                </FormControl>
            <div style={{ display : 'flex', flexDirection : 'row', justifyContent : 'space-around'}}>
                <p className = 'fundEntry'>10 $</p>
                <p className = 'fundEntry'>100 $</p>
                <p className = 'fundEntry'>1.000 $</p>
            </div>
            <button
                type = 'button'
                className = 'donateBtn'
                onClick = {() => console.log('Ok')}
            >
                Donate Now
            </button>
        </div>
    )
}