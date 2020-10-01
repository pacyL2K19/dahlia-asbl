import React from 'react';
import {
    FormControl,
    OutlinedInput,
    Modal,
    Fade
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
// import { Link } from 'react-router-dom';
import paypal from '../images/paypal.png';
import visa from '../images/cartes.png';

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
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export const Donate = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
            <h2>FAITES UN DON</h2>
            <p>
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
                className = 'donateBtn1'
                onClick = {handleOpen}
            >
                <a className = 'donBtns' href = '#top'>DONNER</a>
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                  <div style = {{paddingTop : 40, paddingBottom : 40}} className={classes.paper}>
                    <div id = 'headerDon'><p style= {{textAlign : 'center'}}>Faire un don maintenant</p></div> 
                    <p style = {{textAlign : 'center', margin : 20}}>Montant souscrit</p>
                    <div id = 'amountContainer'>
                        {values.amount} USD
                    </div>
                    <p style = {{textAlign : 'center'}}>Quelle méthode de paiement ?</p>
                    <div id = 'btnActions 'style = {{display : 'flex', flexDirection : 'row'}}>
                        <img src =  {paypal} alt = '' style = {{height : 55, width : 150, borderColor : '#abcdef', borderWidth : 1, borderRadius : 2, borderStyle : 'solid', margin : 10}} />
                        <img src = {visa} alt = '' style = {{height : 55, width : 150, borderColor : '#abcdef', borderWidth : 1, borderRadius : 2, borderStyle : 'solid', margin : 10}}/>
                    </div>

                </div>
                </Fade>
            </Modal>
        </div>
    )
}