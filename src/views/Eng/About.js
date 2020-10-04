import React from 'react';
import PreFooter from '../../components/Eng/PreFooter';
import Footer from '../../components/Eng/Footer'; 
import {
    Modal,
    Fade
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
//images
import Backdrop from '@material-ui/core/Backdrop';
import emailjs from 'emailjs-com';
import paypal from '../../images/paypal.png';
import visa from '../../images/cartes.png';
import apropos from '../../images/apropos.png';
import volontaire from '../../images/volontaire.png';
import don from '../../images/don.png';
import donataire from '../../images/donataire.png';
import cadeau from '../../images/cadeau.png';
import { Grid } from '@material-ui/core';
import { Form, Button } from 'react-bootstrap'
import styles from 'styled-components';

const Box = styles.div`

    display : flex;
    flex-direction : row;

`

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
const AboutE = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    // const [open2, setOpen2] = React.useState(false);
    const [typeSubsc, setTypeSubsc] = React.useState(' Give a gift ');
    // const [from_name, setToName] = useState('');

    const handleOpen = () => {
        setOpen(true);
        setValues ({
            amount : 10
        })
    };

    const handleOpen1 = () => {
        setOpen1(true);
        setTypeSubsc(' ')
    };

    const handleOpen2 = () => {
        setOpen1(true);
        setTypeSubsc('Volunteer');
    };
    
    const handleOpen3 = () => {
        setOpen1(true);
        setTypeSubsc('Individual Donator');
    }

    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
        setTypeSubsc(' Give a gift  ')
        setValues({
            from_mail : '',
            from_name : ''
        })
    };
    const [values, setValues] = React.useState({
        amount: 10,
        from_name : '',
        from_mail : ''
    });
    const templateParams = {
        reply_to : values.from_mail,
        from_name : values.amount+' | '+values.from_mail,
        to_name : 'Dahlia-asbl',
        message : 'Souscription pour '+typeSubsc,
    }
    const sendMail = (e) => {
        e.preventDefault();
        console.log('arrived')

        if (values.from_mail !== '' && values.from_name !== '') {
            
            emailjs.send('a5dcaa0031eeaae0302d776030a24e0b', 'template_k380rke', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });
        } else {
            console.log('error ')
            alert('Veuillez completer vos identifiants');
        }
        
    }
    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop] : event.target.value });
    // };

    // const 

    // const onClickBtn1 = () => {
    //   setValues({...values, amount : '10'});
    //   console.log('ok');
    // }

    // const onClickBtn2 = () => {
    //   setValues({...values, amount : '100'});
    //   console.log('ok');
    // }

    // const onClickBtn3 = () => {
    //   setValues({...values, amount : '1.000'});
    //   console.log('ok');
    // }
    return (
        <div>
            {/* <Navbar /> */}
            <div id = 'introAboutE' style = {{backgroundImage : 'url('+require('../../images/bgVision.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {apropos} alt = ''/><br /><br />
                <h2>About</h2>
            </div>
            <div id = 'mainContentE' className = 'container'>
                <Box data-os = 'fade-down'>
                    <Grid container>
                        <Grid 
                            item
                            xs = {12}
                            md = {12}
                            lg = {6}
                            xl = {6}  
                            style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', paddingRight : 30}}  
                        >
                            <p style = {{textAlign : 'justify'}}>Dahlia asbl was born from our desire to give to each woman and child the chance to succeed in their future.</p><br /><br />
                            <p style = {{textAlign : 'justify'}}>At Dahlia asbl, we are convinced that knowledge  is the key to a better world. However, access to education or / and professional training is still a challenge for many young people around the world.</p>
                        </Grid>
                        <Grid 
                            item
                            xs = {12}
                            md = {12}
                            lg = {6}
                            xl = {6}    
                        >
                            <div style = {{backgroundImage : 'url('+require('../../images/toput.jpeg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 600}}>

                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <Box data-aos = 'fade-up'>
                    <Grid container>
                        <Grid 
                            item
                            xs = {12}
                            md = {12}
                            lg = {6}
                            xl = {6}    
                        >
                            <div style = {{backgroundImage : 'url('+require('../../images/first.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 600}}>

                            </div>
                        </Grid>
                        <Grid 
                            item
                            xs = {12}
                            md = {12}
                            lg = {6}
                            xl = {6}  
                            style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', paddingLeft : 30}}  
                        >
                            <p style = {{textAlign : 'justify'}}>Dahlia asbl is a non-profit organization, which aims to promote the social well-being of disadvantaged children in general and particularly women, and people marginalized in society through re-education, reintegration, social reintegration and mutual aid.</p>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div id = 'iconSide'>
                <Grid container>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {3}
                        xl = {3}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 500, backgroundColor : '#F2F2F2'}}
                    >
                        <img src = {don} alt = ''style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Make <br/> a donation</h2>
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen}
                        >
                            Donate Now
                        </button>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {3}
                        xl = {3}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 500, backgroundColor : '#ffffff'}}
                    >
                        <img src = {cadeau} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Give <br /> a Gift</h2>
                        {/* <p style = {{textAlign : 'center'}}>At quis risus sed vulputate odio ut enim blandit. Massa eget egestas purus viverra.</p><br /> */}
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen1}
                        >
                            Donate Now
                        </button>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {3}
                        xl = {3}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 500, backgroundColor : '#F2F2F2'}}
                    >
                        <img src = {volontaire} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Become <br />a volunteer</h2>
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen2}
                        >
                            SUBSCRIBE
                        </button>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {3}
                        xl = {3}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 500, backgroundColor : '#ffffff'}}
                    >
                        <img src = {donataire} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Individual <br /> Donator</h2>
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen3}
                        >
                            SUBSCRIBE
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
                                    <div id = 'headerDon'><p style= {{textAlign : 'center'}}>Make a donation now</p></div> 
                                    <p style = {{textAlign : 'center', margin : 20}}>Amount</p>
                                    <div id = 'amountContainer'>
                                         USD   <input placeholder = 'ex : 100' type = 'text' style={{width : 100, backgroundColor : 'transparent', borderWidth : 0 }} /> 
                                    </div>
                                    <p style = {{textAlign : 'center'}}>Which payment method do you prefeer ?</p>
                                    <div id = 'btnActions 'style = {{display : 'flex', flexDirection : 'row'}}>
                                        <img src =  {paypal} alt = '' style = {{height : 55, width : 150, borderColor : '#abcdef', borderWidth : 1, borderRadius : 2, borderStyle : 'solid', margin : 10}} />
                                        <img src = {visa} alt = '' style = {{height : 55, width : 150, borderColor : '#abcdef', borderWidth : 1, borderRadius : 2, borderStyle : 'solid', margin : 10}}/>
                                    </div>

                                </div>
                            </Fade>
                        </Modal>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open1}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                            <Fade in={open1}>
                                <Form style={{padding : 30, backgroundColor : '#733b83'}}>
                                    <Form.Group controlId="formBasicEmail" onSubmit = {sendMail}>
                                        <Form.Label style={{color : 'white'}}>Complet name</Form.Label><br /><br /><br />
                                        <Form.Control type="text" placeholder="Please enter your name" onChange = {(event) => {setValues({from_name : event.target.value})}} value = {values.from_name} /><br /><br />
                                        <Form.Label style={{color : 'white'}}>Email address</Form.Label><br /><br /><br />
                                        <Form.Control type="email" placeholder="Please enter your email adress" onChange = {(event) => {setValues({from_mail : event.target.value})}} value = {values.from_mail} /><br /><br />
                                        <Form.Text className="text-muted" style={{color : 'white'}}>
                                            Please, type your current adress<br /> We will contact you back <br /><br />
                                        </Form.Text> 
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>       {typeSubsc}
                                </Form>
                            </Fade>
                        </Modal>
                    </Grid>
                </Grid>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default AboutE