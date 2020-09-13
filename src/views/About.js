import React from 'react';
import {Navbar} from '../components/Navbar';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer'; 

//images 

import apropos from '../images/apropos.png';
import volontaire from '../images/volontaire.png';
import don from '../images/don.png';
import donataire from '../images/donataire.png';
import cadeau from '../images/cadeau.png';
import { Grid } from '@material-ui/core';

const About = () => {
    return (
        <div>
            <Navbar />
            <div id = 'introAbout' style = {{backgroundImage : 'url('+require('../images/bgVision.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {apropos} alt = ''/><br /><br />
                <h2>À propos</h2>
            </div>
            <div id = 'mainContent' className = 'container'>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >
                        <p>Dahlia asbl est née de notre volonté de donner à chaque femme et enfant les chances de réussir leur avenir.</p><br /><br />
                        <p>Chez Dahlia asbl, nous sommes convaincus que la connaissance et le savoir sont les clés d’un monde meilleur. Pourtant, l’accès à l’éducation ou/et la formation professionnelle reste encore une épreuve pour de nombreux jeunes à travers le monde.</p>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../images/second.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}>

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
                        
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >

                    </Grid>
                </Grid>
            </div>
            <div id = 'iconSide'>

            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default About