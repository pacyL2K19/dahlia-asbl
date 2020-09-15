import React from 'react';
import {
    FormControl,
    OutlinedInput
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
      width : '100%',
      right : 10,
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
        amount: 10
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const onClickBtn1 = () => {
      setValues({...values, amount : '10'});
      console.log('ok');
    }

    const onClickBtn2 = () => {
      setValues({...values, amount : '100'});
      console.log('ok');
    }

    const onClickBtn3 = () => {
      setValues({...values, amount : '1.000'});
      console.log('ok');
    }

    // const performPayment = () => {

    // }

    return(
        <div id = 'donateField'>
            <h2 style = {{color : '#fffeee', textAlign : 'center'}}>FAITES UN DON</h2>
            <p style = {{ color : '#dddddd'}}>
                Veuillez entrer le montant
            </p><br />
            <FormControl fullWidth className={classes.margin} variant="standard">
                {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
                <OutlinedInput
                    style = {{ color : 'black', fontSize : 12, borderColor : 'white', backgroundColor : 'white'}}
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<span style = {{ position : 'initial', marginRight : 30, marginLeft : 15}}>$</span>}
                    labelWidth={60}
                />
            </FormControl>
            <div style={{ display : 'flex', flexDirection : 'row', justifyContent : 'space-around', marginTop : 25, marginBottom : 25}}>
                <p className = 'fundEntry' onClick = {onClickBtn1}>10 $</p>
                <p className = 'fundEntry' onClick = {onClickBtn2}>100 $</p>
                <p className = 'fundEntry' onClick = {onClickBtn3}>1.000 $</p>
            </div>
            <button
                type = 'button'
                className = 'donateBtn'
                // onClick = {performPayment}
            >
                <Link to = '/donate' className = 'donBtns'>Donner maintenant</Link>
            </button>
        </div>
    )
}