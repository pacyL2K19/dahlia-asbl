import React from 'react';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer'; 

//images 

import vision from '../images/pro.png';
import support from '../images/Volunteer.png';
import donataire from '../images/donataire.png';
import dialogue from '../images/dialogue.png';
import cerveau from '../images/cerveau.png';
import { Grid } from '@material-ui/core';

const Projects = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div id = 'introAbout' style = {{backgroundImage : 'url('+require('../images/bgVision.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {vision} alt = ''/><br /><br />
                <h2>Nos Projets</h2>
            </div>
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
                        <p style = {{textAlign:"center", color : '#733b83', fontSize : 28, fontWeight:'bold'}}>Nos projets en cours de planification et exécution à Kinshasa</p><br /><br />
                        <p style = {{textAlign:"justify"}}>• La construction d’une école (d’un centre ) de formations professionnelles pour jeunes filles, filles-mères démunies ;</p><br />
                        <p style = {{textAlign:"justify"}}>• L’autonomisation de la femme congolaise par l’entrepreneuriat;</p><br />
                        <p style = {{textAlign:"justify"}}>• L’exploitation agricole en milieu rural pour lutter contre la malnutrition;</p><br />
                        <p style = {{textAlign:"justify"}}>• L’implémentation de l’entreprise <b>l'Oréal Paris</b> à Kinshasa.</p><br />
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../images/pro.svg')+')', backgroundPosition : 'center', backgroundSize : '98%', backgroundRepeat : 'no-repeat', height : 400}}>

                        </div>
                    </Grid>
                </Grid>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default Projects