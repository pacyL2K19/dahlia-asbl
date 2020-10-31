import React from 'react';
import PreFooter from '../../components/Eng/PreFooter';
import Footer from '../../components/Eng/Footer'; 

//images 

import vision from '../../images/pro.png';
import support from '../../images/Volunteer.png';
import donataire from '../../images/donataire.png';
import dialogue from '../../images/dialogue.png';
import cerveau from '../../images/cerveau.png';
import { Grid } from '@material-ui/core';

const ProjectsE = () => {
    return (
        <div>
            <div id = 'introAboutE' style = {{backgroundImage : 'url('+require('../../images/bgVision.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {vision} alt = ''/><br /><br />
                <h2>Our Projects</h2>
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
                        <p style = {{textAlign: "center", color: '#733b83', fontSize: 28, fontWeight: 'bold'}}> Our projects in planning and execution in Kinshasa </p> <br /> < br />
                        <p style = {{textAlign: "justify"}}> • The construction of a school (center) for vocational training for poor young girls and single mothers; </p> <br />
                        <p style = {{textAlign: "justify"}}> • Empowerment of Congolese women through entrepreneurship; </p> <br />
                        <p style = {{textAlign: "justify"}}> • Farming in rural areas to fight against malnutrition; </p> <br />
                        <p style = {{textAlign: "justify"}}> • The implementation of the <b>l'Oréal Paris company</b> in Kinshasa. </p> <br />
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../../images/pro.svg')+')', backgroundPosition : 'center', backgroundSize : '98%', backgroundRepeat : 'no-repeat', height : 400}}>

                        </div>
                    </Grid>
                </Grid>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default ProjectsE