import React from 'react';
import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Modal,
    Fade
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';

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

const PreFooter = () => {
    const [open1, setOpen1] = React.useState(false);
    const handleClose = () => {
        setOpen1(false);
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
                        <TextField id="outlined-basic" label="Mail" variant="outlined" placeholder = 'Enter votre adresse mail'/><div className = 'btnNew' onClick = {setOpen1}>Souscrire</div>
                    </form>
                </Grid>
            </Grid>
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
                                    </Button>  Newsletter
                                </Form>
                            </Fade>
                        </Modal>
        </div>
    )
}

export default PreFooter