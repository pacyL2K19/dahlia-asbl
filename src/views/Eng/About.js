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
import support from '../../images/Volunteer.png';
import donataire from '../../images/donataire.png';
import dialogue from '../../images/dialogue.png';
import cerveau from '../../images/cerveau.png';
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
const About = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    // const [open2, setOpen2] = React.useState(false);
    const [typeSubsc, setTypeSubsc] = React.useState(' Faire un cadeau ');
    const [textDscription, setTextDescription] = React.useState('');
    // const [from_name, setToName] = useState('');

    const handleOpen = () => {
        setOpen(true);
        setValues ({
            amount : 10
        })
    };

    const handleOpen1 = () => {
        setOpen1(true);
        setTypeSubsc(' ');
        setTextDescription('Please put your current Email address, we will contact you as soon as possible');
    };

    const handleOpen2 = () => {
        setOpen1(true);
        setTypeSubsc('Volunteer');
        setTextDescription('Enter your Email address for your volunteering wish and you will be contacted as soon as possible');
    };
    
    const handleOpen3 = () => {
        setOpen1(true);
        setTypeSubsc('Individual Donator');
        setTextDescription('Please put your current Email address, we will contact you as soon as possible');
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

    return (
        <div>
            {/* <Navbar /> */}
            <div id = 'introAboutE' style = {{backgroundImage : 'url('+require('../../images/bgVision.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {apropos} alt = ''/><br /><br />
                <h2>About</h2>
            </div>
            <div id = 'mainContentE' className = 'container-fluid'>
                <Box data-os = 'fade-down'>
                    <Grid container>
                        <Grid 
                            item
                            xs = {12}
                            md = {12}
                            lg = {4}
                            xl = {4}  
                            style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', padding : 30}}  
                        >
                            <h3 style={{textAlign:'center', fontWeight : 'bold', fontSize : 28, color : '#733b83'}}>Who are we ?</h3><br />
                            <p style = {{textAlign : 'justify'}}><b> Dahlia asbl </b> was born from our desire to give every woman and child the chance to succeed in their future.</p><br /><br />
                            <p style = {{textAlign : 'justify'}}>The aim of Dahlia Asbl is to provide assistance, advocacy, defense, research and analysis of situations, educate (train, inform and raise awareness), federate, support, guide and coordinate initiatives and wills related to development sustainable for vulnerable and deprived populations while giving every woman and child the chance to succeed in their future.</p><br /><br />                            
                        </Grid>
                        <Grid 
                            item
                            xs = {12}
                            md = {12}
                            lg = {4}
                            xl = {4}    
                        >
                            <div style = {{backgroundImage : 'url('+require('../../images/first.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 600}}>

                            </div>
                        </Grid>
                        <Grid 
                            item
                            xs = {12}
                            md = {12}
                            lg = {4}
                            xl = {4}  
                            style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', padding : 30}}  
                        >
                            <h3 style={{textAlign:'center', fontWeight : 'bold', fontSize : 28, color : '#733b83'}}>Who are we ?</h3><br />
                            <p style = {{textAlign : 'justify'}}>At Dahlia asbl, we are convinced that knowledge and knowledge are the keys to a better world. However, access to education or / and vocational training is still a challenge for many young people around the world.</p><br/>
                            <p style = {{textAlign : 'justify'}}>Dahlia asbl is a non-profit organization, which aims to promote the social well-being of disadvantaged children in general and particularly women, and people marginalized in society through re-education, reintegration, social reintegration and mutual aid.</p>                            
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div id = 'iconSide'>
                <div style = {{width : '100%', backgroundColor:'#926ba1', padding : 30, marginTop : -5}}>
                    <h3 style={{textAlign : 'center', color : "white", fontWeight : 'bold', fontSize:45}}>Nos Valeurs</h3>
                </div>
                <Grid container>
                    <Grid
                        item
                        xs = {12}
                        md = {4}
                        lg = {4}
                        xl = {4}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 400, backgroundColor : '#F2F2F2'}}
                    >
                        <img src = {dialogue} alt = ''style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Dialogue</h2>
                        <p style = {{textAlign : 'center'}}>Because we cannot act alone, we place listening, respect, exchange, cooperation and proposal at the heart of our actions.</p><br />
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {4}
                        lg = {4}
                        xl = {4}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 400, backgroundColor : '#ffffff'}}
                    >
                        <img src = {cerveau} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Sobriety</h2>
                        <p style = {{textAlign : 'center'}}>In a world where species and natural resources are becoming scarce, where inequalities are growing, we want to distinguish the essential from the superfluous.</p><br />
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {4}
                        lg = {4}
                        xl = {4}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 400, backgroundColor : '#F2F2F2'}}
                    >
                        <img src = {donataire} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Solidarity</h2>
                        <p style = {{textAlign : 'center'}}>Because the destinies of Nature and Man are interdependent, we have a duty to work for the preservation of all living things, now and for the future.</p><br />
                    </Grid>
                </Grid>
            </div>
            <div style = {{width : '100%', backgroundColor:'#926ba1', padding : 30, marginTop : -5}}>
                <h3 style={{textAlign : 'center', color : "white", fontWeight : 'bold', fontSize:45}}>Our Vision & Our Goals</h3>
            </div>
            <div id = 'mainContent' style={{width : '100%'}}>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../../images/second.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : '100%'}}>

                        </div>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}  
                        style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', padding : 40}}  
                    >
                        <h3 style={{textAlign:'center', fontWeight : 'bold', fontSize : 28, color : '#733b83'}}>Vision</h3>
                        <p style = {{textAlign:"justify"}}><b> "The goodness of man is a flame which can be hidden, but which cannot be extinguished. Yes, positive energy can never disappear without having impacted its square perimeter. "</b> </p> <br />
                        <p style = {{textAlign: "justify"}}> The circumstances of life and obstacles, are not stronger than this positive energy; We are part of the perspective of contributing to a dynamic, strong, harmonious Congolese society where the fundamental and universal rights of women and vulnerable children are respected and valued, which guarantees the progress of our Congolese nation and the work it deserves.</p>
                        <h3 style={{textAlign:'center', fontWeight : 'bold', fontSize : 28, color : '#733b83'}}>Objectives</h3>
                        <p style = {{textAlign:"justify"}}>Dahlia Asbl is a non-profit organization, which aims to promote the social well-being of disadvantaged children in general and particularly women, and people marginalized in society through re-education, reintegration, social reintegration and mutual aid.</p><br />
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../../images/gal24.jpeg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : '100%'}}>

                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}  
                        style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', padding : 30}}  
                    >
                        <h3 style={{textAlign:'center', fontWeight : 'bold', fontSize : 28, color : '#733b83'}}>Our Mission</h3><br />
                        <h5 style = {{textAlign: "justify"}}> Dahlia asbl's mission is to: </h5>
                        <p style = {{textAlign: "justify"}}> • Give children hope for a better future; </p> <br />
                        <p style = {{textAlign: "justify"}}> • Teach children moral values ​​for their development; </p> <br />
                        <p style = {{textAlign: "justify"}}> • Promote women in the workplace; </p> <br />
                        <p style = {{textAlign: "justify"}}> • Set up sustainable development projects that can facilitate the socio-economic integration of women and children; </p> <br />
                        <p style = {{textAlign: "justify"}}> • Support school training and vocational preparation for children who do not have the opportunity to study. </p> <br />
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../../images/gal22.jpeg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : '100%'}}>

                        </div>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}  
                        style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', padding : 30}}  
                    >
                        <div>
                            
                        </div>
                        <h3 style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 28, color: '# 733b83'}}> Our fields of intervention </h3> <br />
                        <h5 style = {{textAlign: "justify"}}> Our fields of intervention are divided into 4 pillars: </h5>
                        <p style = {{textAlign: "justify"}}> • The defense of human rights and the rights of vulnerable and disadvantaged people; </p> <br />
                        <p style = {{textAlign: "justify"}}> • Inclusive education (including vocational training, trades and gathering activities aimed at bringing smiles back); </p> <br />
                        <p style = {{textAlign: "justify"}}> • Promoting the development of human capital (through our transformational training); </p> <br />
                        <p style = {{textAlign: "justify"}}> • Orientation of women and young people to entrepreneurship, a sector providing employment and empowerment in the Democratic Republic of Congo. </p> <br / >
                    </Grid>
                </Grid>
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
                        <h2 style = {{textAlign : 'center'}}>Make a<br />donation</h2>
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen}
                        >
                            DONATE
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
                        <h2 style = {{textAlign : 'center'}}>Give a Gift</h2>
                        {/* <p style = {{textAlign : 'center'}}>At quis risus sed vulputate odio ut enim blandit. Massa eget egestas purus viverra.</p><br /> */}
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen1}
                        >
                            DONATE
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
                        <h2 style = {{textAlign : 'center'}}>Become Volonteer</h2>
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
                        <h2 style = {{textAlign : 'center'}}>Individual Donator</h2>
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
                                    <div id = 'headerDon'><p style= {{textAlign : 'center'}}>Make Donation NOw</p></div> 
                                    <p style = {{textAlign : 'center', margin : 20}}>Amount</p>
                                    <div id = 'amountContainer'>
                                        <input placeholder = 'ex : 100' type = 'text' style={{width : 100, backgroundColor : 'transparent', borderWidth : 0 }} />  USD
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
                                        <Form.Label style={{color : 'white'}}>Your name</Form.Label><br /><br /><br />
                                        <Form.Control type="text" placeholder="Put your name here" onChange = {(event) => {setValues({from_name : event.target.value})}} value = {values.from_name} /><br /><br />
                                        <Form.Label style={{color : 'white'}}>Email address</Form.Label><br /><br /><br />
                                        <Form.Control type="email" placeholder="Your email adress " onChange = {(event) => {setValues({from_mail : event.target.value})}} value = {values.from_mail} /><br /><br />
                                        <Form.Text className="text-muted" style={{color : 'white'}}>
                                            {textDscription}
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
                                    </Button>       {typeSubsc}
                                </Form>
                            </Fade>
                        </Modal>
                    </Grid>
                </Grid>
            </div>
            <div style = {{backgroundImage : 'url('+require('../../images/bgHome.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', padding : 50, display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
                <img src = {support} alt = '' style = {{height : 100, width : 100}}/> <br />
                <h3 style = {{color : 'white', textAlign : 'center', height : 50}}>Bcome Volunteer</h3><br />
                <p style = {{color : 'white', textAlign : 'center', height : 30}}>Become volunteers to participate in our awareness and donation campaigns</p>
                <button
                    type = 'button'
                    className = 'donateBtn'
                    style = {{width : 300, padding : 20, height : 80, fontSize : 20, marginTop : 30}}
                    onClick = {() => console.log('Ok')}
                >
                    SUBSCRIBE
                </button>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default About