import React from 'react';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer'; 
import {
    Modal,
    Fade
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
//images
import Backdrop from '@material-ui/core/Backdrop';
import emailjs from 'emailjs-com';
import paypal from '../images/paypal.png';
import visa from '../images/cartes.png';
import apropos from '../images/apropos.png';
import volontaire from '../images/volontaire.png';
import don from '../images/don.png';
import support from '../images/Volunteer.png';
import donataire from '../images/donataire.png';
import dialogue from '../images/dialogue.png';
import cerveau from '../images/cerveau.png';
import cadeau from '../images/cadeau.png';
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
        setTextDescription('Veuillez mettre votre adresse Email courante, nous vous contacterons dans le plus bref délais');
    };

    const handleOpen2 = () => {
        setOpen1(true);
        setTypeSubsc('Volontaire');
        setTextDescription('Insérer votre adresse Email pour votre souhait de volontariat et vous serez contacté dans le plus bref délais');
    };
    
    const handleOpen3 = () => {
        setOpen1(true);
        setTypeSubsc('Donateur individuel');
        setTextDescription('Pour votre intérêt de devenir donateur individuel, laissez votre adresse Email et nous vous contacterons dans le plus bref délais');
    }

    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
        setTypeSubsc(' Faire un cadeau ')
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
        // console.log('arrived')

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
            <div id = 'introAbout' style = {{backgroundImage : 'url('+require('../images/bgVision.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {apropos} alt = ''/><br /><br />
                <h2>À propos</h2>
            </div>
            <div id = 'mainContent' className = 'container'>
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
                            <h3 style={{textAlign:'center', fontWeight : 'bold', fontSize : 28, color : '#733b83'}}>Qui sommes-nous ?</h3><br />
                            <p style = {{textAlign : 'justify'}}><b>Dahlia asbl</b> est née de notre volonté de donner à chaque femme et enfant les chances de réussir leur avenir.</p><br /><br />
                            <p style = {{textAlign : 'justify'}}>L’objet visé par Dahlia Asbl est d’apporter assistance, plaidoirie, défense, faire des recherches et des analyses des situations, éduquer ( former, informer et sensibiliser ), fédérer, accompagner, orienter et coordonner les initiatives et les volontés liées au développement durable en faveur des populations vulnérables et démunies tout en donnant à chaque femme et enfant les chances de réussir leur avenir.</p><br /><br />                            
                        </Grid>
                        <Grid 
                            item
                            xs = {12}
                            md = {12}
                            lg = {6}
                            xl = {6}    
                        >
                            <div style = {{backgroundImage : 'url('+require('../images/toput.jpeg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 600}}>

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
                            <div style = {{backgroundImage : 'url('+require('../images/first.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 600}}>

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
                            <p style = {{textAlign : 'justify'}}>Chez Dahlia asbl, nous sommes convaincus que la connaissance et le savoir sont les clés d’un monde meilleur. Pourtant, l’accès à l’éducation ou/et la formation professionnelle reste encore une épreuve pour de nombreux jeunes à travers le monde.</p><br/>
                            <p style = {{textAlign : 'justify'}}>Dahlia asbl est une organisation non lucrative, qui a pour objectifs de promouvoir le bien être social des enfants défavorisés en général et particulièrement des femmes, et les personnes marginalisées dans la société par la rééducation, la réintégration, la réinsertion sociale et l’entraide.</p>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div id = 'iconSide'>
                <div style = {{width : '100%', backgroundColor:'#926ba1', padding : 30}}>
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
                        <p style = {{textAlign : 'center'}}>Parce que nous ne pouvons agir seuls, nous plaçons l’écoute, le respect, l’échange, la coopération et la proposition au cœur de nos actions.</p><br />
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
                        <h2 style = {{textAlign : 'center'}}>Sobriété</h2>
                        <p style = {{textAlign : 'center'}}>Dans un monde où les espèces et les ressources naturelles se raréfient, où les inégalités se creusent, nous souhaitons distinguer l’essentiel du superflu.</p><br />
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
                        <h2 style = {{textAlign : 'center'}}>Solidarité</h2>
                        <p style = {{textAlign : 'center'}}>Parce que les destins de la Nature et de l’Homme sont interdépendants, nous avons le devoir d’œuvrer pour la préservation de l’ensemble du vivant, aujourd’hui et pour demain.</p><br />
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
                        <h2 style = {{textAlign : 'center'}}>Faire <br/> un don</h2>
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen}
                        >
                            DONNER
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
                        <h2 style = {{textAlign : 'center'}}>Faire un cadeau</h2>
                        {/* <p style = {{textAlign : 'center'}}>At quis risus sed vulputate odio ut enim blandit. Massa eget egestas purus viverra.</p><br /> */}
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen1}
                        >
                            DONNER
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
                        <h2 style = {{textAlign : 'center'}}>Devenir volontaire</h2>
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen2}
                        >
                            SOUSCRIRE
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
                        <h2 style = {{textAlign : 'center'}}>Donateur Individuel</h2>
                        <br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {handleOpen3}
                        >
                            SOUSCRIRE
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
                                        <input placeholder = 'ex : 100' type = 'text' style={{width : 100, backgroundColor : 'transparent', borderWidth : 0 }} />  USD
                                    </div>
                                    <p style = {{textAlign : 'center'}}>Quelle méthode de paiement ?</p>
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
                                        <Form.Label style={{color : 'white'}}>Votre nom complet</Form.Label><br /><br /><br />
                                        <Form.Control type="text" placeholder="Mettre votre nom" onChange = {(event) => {setValues({from_name : event.target.value})}} value = {values.from_name} /><br /><br />
                                        <Form.Label style={{color : 'white'}}>Email address</Form.Label><br /><br /><br />
                                        <Form.Control type="email" placeholder="Entrez votre adresse mail" onChange = {(event) => {setValues({from_mail : event.target.value})}} value = {values.from_mail} /><br /><br />
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
                                        Soumettre
                                    </Button>       {typeSubsc}
                                </Form>
                            </Fade>
                        </Modal>
                    </Grid>
                </Grid>
            </div>
            <h3 style={{textAlign:'center', fontWeight : 'bold', fontSize : 45, marginTop : 30, marginBottom : 20, color : '#733b83'}}>Notre Vision & Nos Objectifs</h3><br />
            <div id = 'mainContent' className = 'container'>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}  
                        style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', paddingRight : 30}}  
                    >
                        <p style = {{textAlign:"justify"}}><b>« La bonté de l’homme est une flamme qu’on peut cacher, mais qu’on ne peut pas éteindre. Oui, une énergie positive ne peut jamais disparaitre sans avoir impacté son périmètre carré. »</b></p><br /><br />
                        <p style = {{textAlign:"justify"}}>Les circonstances fâcheuses de la vie et les obstacles, ne sont pas plus fort que cette énergie positive ; nous nous inscrivons dans la perspective de contribuer à une société congolaise dynamique, forte, harmonieuse où les droits fondamentaux et universels de la femme et des enfants vulnérables sont respectés et valorisés, ce qui garantit le progrès de notre nation congolaise et le travail mérité.</p>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../images/second.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 400}}>

                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../images/first.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 400}}>

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
                        <h3 style={{textAlign:'center', fontWeight : 'bold', fontSize : 28, color : '#733b83'}}>Notre Mission</h3><br />
                        <h5 style = {{textAlign:"justify"}}>Dahlia asbl a pour mission de :</h5>
                        <p style = {{textAlign:"justify"}}>• Donner aux enfants l’espoir à un avenir meilleur ;</p><br />
                        <p style = {{textAlign:"justify"}}>• Apprendre aux enfants des valeurs morales pour leurs épanouissements ;</p><br />
                        <p style = {{textAlign:"justify"}}>• Faire la promotion de la femme dans le milieu professionnel;</p><br />
                        <p style = {{textAlign:"justify"}}>• Mettre sur pieds des projets de développement durable pouvant faciliter l’insertion socio-économique de la femme et de l’enfant ;</p><br />
                        <p style = {{textAlign:"justify"}}>• Soutenir la formation scolaire et la préparation professionnelle des enfants n’ayant pas la possibilité d’étudier.</p><br />
                    </Grid>
                </Grid>
            </div>
            <div style = {{backgroundImage : 'url('+require('../images/bgHome.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', padding : 50, display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
                <img src = {support} alt = '' style = {{height : 100, width : 100}}/> <br />
                <h3 style = {{color : 'white', textAlign : 'center', height : 50}}>Devenir volontaire</h3><br />
                <p style = {{color : 'white', textAlign : 'center', height : 30}}>Devenez volontaires pour participer à nos campagnes de sensibilisation et de donation </p>
                <button
                    type = 'button'
                    className = 'donateBtn'
                    style = {{width : 300, padding : 20, height : 80, fontSize : 20, marginTop : 30}}
                    onClick = {() => console.log('Ok')}
                >
                    INSCRIVEZ-VOUS
                </button>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default About