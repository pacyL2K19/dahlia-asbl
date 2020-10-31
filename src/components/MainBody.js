import React from 'react';
import {
    Grid
} from '@material-ui/core';

import data from '../helpers/data.json';
import oreilleIcon from '../images/ecouteIcon.png';
import okIcon from '../images/okIcon.png';
import feuilleIcon from '../images/feuilleIcon.png';
import gifPlayer from '../images/playing.gif';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Modal,
    Fade
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
import paypal from '../images/paypal.png';
import visa from '../images/cartes.png';
// Images 

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
            <div id = 'firstContent' className = 'container'>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}
                    >
                        <h2 style = {{textAlign : 'end'}}>
                            Nous travaillons<br />
                            Auprès de tous ceux qui sont<br />
                            Dans le besoin <br />
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
                            Nous travaillons auprès de tout ceux qui sont dans le besoin : Contribuer à une société́ congolaise dynamique où la femme sera libre, forte, valorisée et apportera du progrès , donner l’accès à l’éducation aux enfants pour leur assurer un avenir meilleur et un regard innovant autour des valeurs du travail.
                        </p>
                    </Grid>
                </Grid>
            </div>
            <div id = 'iconContents' className = 'container'>
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
            <div style={{height : 400, width : '100%', backgroundImage : 'url('+require('../images/bloc.jpg')+')', backgroundSize : 'cover', backgroundPosition : 'center', backgroundRepeat : 'no-repeat', paddingTop : 10, marginTop : '5%'}}>
                <p style = {{textAlign : 'end', marginRight : '5%', marginTop : '5%', color : 'white', fontSize : 25}}><em>" Quand on a une vie meilleure que les autres,<br/> on construit une table longue,<br/> pas une clôture plus haute."</em></p>
                <h2 style={{fontSize:25, textAlign:"end", marginRight : '5%', color:'white'}}>Nadège Dubier</h2>
            </div>
            <div id = 'videoBan' className = 'container'>
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
                            <h3>Le bien être social, <br /> C'est notre objectif</h3>
                            <p>
                                Notre objectif est de promouvoir le bien être social des enfants défavorisés en général et particulièrement des femmes, et les personnes marginalisées dans la société par la rééducation, la réintégration, la réinsertion sociale et l’entraide.
                            </p>
                            <p className = 'btnPlus'>
                                En savoir plus 
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
                        <h4>Nous avons une mission</h4><br />
                        <h2>Aider ceux qui en ont besoin</h2>
                        <div className = 'videoBack' style = {{ backgroundImage : 'url('+require('../images/Famille.jpg')+')',  backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}>
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
            <div id = 'lastContent' style = {{backgroundImage : 'url('+require('../images/bgHome.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>
                <Grid container>
                    <Grid 
                        item
                        className = 'unEmpty'
                        xs = {12}
                        md = {6}
                        xl = {6}
                        lg = {6}
                    >
                        <p>Nous existons pour</p>
                        <h3>Donner à chaque femme et enfant les chances de réussir leur avenir</h3>
                        <p>Chez Dahlia asbl, nous sommes convaincus que la connaissance <br /> et le savoir sont les clés d’un monde meilleur.</p>
                        <Grid container className = 'btnGroupL'>
                            <Grid 
                                xs = {12}
                                md = {6}
                                xl = {6}
                                lg = {6}
                                item
                            >
                                <p onClick = {setOpen}>FAIRE UN DON</p>
                            </Grid>
                            <Grid 
                                xs = {12}
                                md = {6}
                                xl = {6}
                                lg = {6}
                                item
                            >
                                <p onClick = {setOpen1}>DEVENIR VOLONTAIRE</p>
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
                                        <Form.Label style={{color : 'white'}}>Votre nom complet</Form.Label><br /><br /><br />
                                        <Form.Control type="text" placeholder="Mettre votre nom" onChange = {(event) => {setValues({from_name : event.target.value})}} value = {values.from_name} /><br /><br />
                                        <Form.Label style={{color : 'white'}}>Email address</Form.Label><br /><br /><br />
                                        <Form.Control type="email" placeholder="Entrez votre adresse mail" onChange = {(event) => {setValues({from_mail : event.target.value})}} value = {values.from_mail} /><br /><br />
                                        <Form.Text className="text-muted" style={{color : 'white'}}>
                                            Veuillez mettre votre adresse courante<br /> Vous serez contacté via cette adresse <br /><br />
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
                                        Soumettre
                                    </Button>  Volontaire
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
                    <div id = 'headerDon'><p style= {{textAlign : 'center'}}>Faire un don maintenant</p></div> 
                    <p style = {{textAlign : 'center', margin : 20}}>Montant souscrit</p>
                    <div id = 'amountContainer'>
                        <input placeholder = 'ex : 100' type = 'text' style={{width : 100, backgroundColor : 'transparent', borderWidth : 0 }} /> USD
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

export default MainBody