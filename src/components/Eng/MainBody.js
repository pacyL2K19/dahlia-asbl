import React from 'react';
import {
    Grid
} from '@material-ui/core';
import data from '../../helpers/Eng/data.json';
import oreilleIcon from '../../images/ecouteIcon.png';
import okIcon from '../../images/okIcon.png';
import feuilleIcon from '../../images/feuilleIcon.png';
import gifPlayer from '../../images/playing.gif'
import {
    Modal,
    Fade
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
import paypal from '../../images/paypal.png';
import visa from '../../images/cartes.png';

// all images
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
        display : 'flex',
        flexDirection : 'row'
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
const MainBody = () => {
    const [open1, setOpen1] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen1(false);
        setOpen(false);
    };
    const [values, setValues] = React.useState({
        from_name : '',
        from_mail : ''
    });
    const templateParams = {
        reply_to : values.from_mail,
        from_name : values.amount+' | '+values.from_mail,
        to_name : 'Dahlia-asbl',
        message : 'Souscription pour Newsletter',
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
    const classes = useStyles ();
    return (
        <div id = 'mainBody'>
            <div id = 'firstContentE' className = 'container'>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}
                    >
                        <h2 style = {{textAlign : 'end'}}>
                            We are working<br />
                            For all who are<br />
                            In need<br />
                        </h2>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}
                    >
                        <p style = {{textAlign : 'start', color : '#5a5a5a'}}>
                            We work with all those who are in need: Contribute to a dynamic Congolese society where women will be free, strong, valued and will bring progress, give children access to education to ensure them a better future and a better future. innovative look around the values ​​of work.
                        </p>
                    </Grid>
                </Grid>
            </div>
            <div id = 'iconContentsE' className = 'container'>
                 <Grid
                    container
                 >
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >
                        <div className = 'itemIconContent'>
                            <img 
                                style = {{backgroundColor : "white"}}
                                src = {oreilleIcon}
                                alt = ''
                            />
                            <p style = {{textAlign : 'center'}}>
                                {data.bodyElements[0].description}
                            </p>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >
                        <div className = 'itemIconContent'>
                            <img 
                                style = {{backgroundColor : "white"}}
                                src = {okIcon}
                                alt = ''
                            />
                            <p style = {{textAlign : 'center'}}>
                                {data.bodyElements[1].description}
                            </p>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >
                        <div className = 'itemIconContent'>
                            <img 
                                style = {{backgroundColor : "white"}}
                                src = {feuilleIcon}
                                alt = ''
                            />
                            <p style = {{textAlign : 'center'}}>
                                {data.bodyElements[2].description}
                            </p>
                        </div>
                    </Grid>
                 </Grid>
            </div>
            <div style={{height : 400, width : '100%', backgroundImage : 'url('+require('../../images/bloc.jpg')+')', backgroundSize : 'cover', backgroundPosition : 'center', backgroundRepeat : 'no-repeat', paddingTop : 10, marginTop : '5%'}}>
                <p style = {{textAlign : 'end', marginRight : '5%', marginTop : '5%', color : 'white', fontSize : 25}}><em>" When you have a better life than others, <br/> you build a long table, <br/> not a taller fence. "</em></p>
                <h2 style={{fontSize:25, textAlign:"end", marginRight : '5%', color:'white'}}>Nadège Dubier</h2>
            </div>
            <div id = 'videoBanE' className = 'container'>
                <Grid 
                    container
                >
                    <Grid
                        item
                        className = 'introVideo'
                        xs = {12}
                        md = {12}
                        xl = {4}
                        lg = {4}
                    >
                        <div className = 'introIn'>
                            <h3>Social welfare, <br /> This is our goal</h3>
                            <p>
                                Our objective is to promote the social well-being of disadvantaged children in general and particularly women, and people marginalized in society through re-education, reintegration, social reintegration and mutual aid.                            </p>
                            <p className = 'btnPlus'>
                                Learn more 
                            </p>
                        </div>
                        
                    </Grid>
                    <Grid
                        item
                        className = 'videoContent'
                        xs = {12}
                        md = {12}
                        xl = {8}
                        lg = {8}
                    >
                        <h4>We have a mission</h4><br />
                        <h2>Help those who need it</h2>
                        <div className = 'videoBack' style = {{ backgroundImage : 'url('+require('../../images/Famille.jpg')+')',  backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}>
                            <a rel = 'noopener noreferrer' target = '_blank' href = 'https://www.youtube.com/watch?v=73Yqk3ytXMs&t=32s'>
                                <img
                                    src = {gifPlayer}
                                    alt = ''
                                    // to put request to youtube api before playing
                                />  
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div id = 'lastContentE' style = {{backgroundImage : 'url('+require('../../images/bgHome.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>
                <Grid container>
                    <Grid 
                        item
                        className = 'unEmpty'
                        xs = {12}
                        md = {6}
                        xl = {6}
                        lg = {6}
                    >
                        <p>We exist for</p>
                        <h3>Giving every woman and child the chance to succeed in their future</h3>
                        <p>At Dahlia asbl, we are convinced that knowledge <br /> and knowledge are the keys to a better world.</p>
                        <Grid container className = 'btnGroupL'>
                            <Grid 
                                xs = {12}
                                md = {6}
                                xl = {6}
                                lg = {6}
                                item
                            >
                                <p onClick = {setOpen}>MAKE A DONATION</p>
                            </Grid>
                            <Grid 
                                xs = {12}
                                md = {6}
                                xl = {6}
                                lg = {6}
                                item
                            >
                                <p onClick = {setOpen1}>BECOME VOLUNTEER</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid 
                        item
                        className = 'empty1'
                        xs = {12}
                        md = {6}
                        xl = {6}
                        lg = {6}
                    >
                        {/* <div>
                            <p></p>
                        </div> */}
                    </Grid>
                </Grid>
            </div>
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
                                        <Form.Control type="text" placeholder="Names" onChange = {(event) => {setValues({from_name : event.target.value})}} value = {values.from_name} /><br /><br />
                                        <Form.Label style={{color : 'white'}}>Email address</Form.Label><br /><br /><br />
                                        <Form.Control type="email" placeholder="Enter your mail adress" onChange = {(event) => {setValues({from_mail : event.target.value})}} value = {values.from_mail} /><br /><br />
                                        <Form.Text className="text-muted" style={{color : 'white'}}>
                                            Please type your current mail adress 
                                        </Form.Text> 
                                    </Form.Group>

                                    {/* <Form.Group controlId="formBasicPassword">
                                        <Form.Label style={{color : 'white'}}>Quel cadeau comptez-vous off</Form.Label>
                                        <Form.Control type="text" placeholder="La nature de votre cadeau" />
                                    </Form.Group> */}
                                    {/* <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group> */}
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>  Volunteer
                                </Form>
                            </Fade>
                        </Modal>
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
                        <input placeholder = 'ex : 100' type = 'text' style={{width : 100, backgroundColor : 'transparent', borderWidth : 0 }} /> USD
                    </div>
                    <p style = {{textAlign : 'center'}}>Which payment method do you prefeer ?</p>
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

export default MainBody