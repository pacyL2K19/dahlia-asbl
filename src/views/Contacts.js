import React from 'react';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import contact from '../images/contact.png';
import {
    Form,
    Button
} from 'react-bootstrap'

const Contacts = () => {
    return (
        <div id = 'contacts'>
            <div id = 'introAbout' style = {{backgroundImage : 'url('+require('../images/bgCont.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {contact} alt = ''/><br /><br />
                <h2>Nous contacter</h2>
            </div>
            <div className = 'container formContact'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Noms *</Form.Label>
                        <Form.Control type="text" placeholder="Votre nom complet" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Adresse Mail *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        Veuillez saisir une adresse courante
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Sujet</Form.Label>
                        <Form.Control type="text" placeholder="Le sujet de votre message" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default Contacts;