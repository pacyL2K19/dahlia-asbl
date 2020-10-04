import React from 'react';
import PreFooter from '../../components/Eng/PreFooter';
import Footer from '../../components/Eng/Footer';
import contact from '../../images/contact.png';
import {
    Form,
    Button
} from 'react-bootstrap'

const ContactsE = () => {
    return (
        <div id = 'contacts'>
            <div id = 'introAboutE' style = {{backgroundImage : 'url('+require('../../images/bgCont.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {contact} alt = ''/><br /><br />
                <h2>Contact us</h2>
            </div>
            <div className = 'container formContact'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Names *</Form.Label>
                        <Form.Control type="text" placeholder="Your complet name" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Mail Adress *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        Please provide your current mail adress
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="The subject of your mail " />
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

export default ContactsE;