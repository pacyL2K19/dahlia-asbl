import React from 'react';
import PreFooter from '../../components/Eng/PreFooter';
import Footer from '../../components/Eng/Footer'; 

//images 

import vision from '../../images/pro.png';
import gifPlayer from '../../images/playing.gif';
import agri from '../images/agri.jpg';
import auto from '../../images/autonomie.jpg';
import ecole from '../../images/ecole.jpg';
import loreal from '../../images/loreal.jpg';

const ProjectsE = () => {
    return (
        <div>
            <div id = 'introAboutE' style = {{backgroundImage : 'url('+require('../../images/bgVision.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {vision} alt = ''/><br /><br />
                <h2>Our Projects</h2>
            </div>
            <div style={{height : 450, backgroundImage : 'url('+require('../../images/realisations.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', paddingTop : 300, borderRadius : 5}}>
                <div className = 'videoBack' style = {{ backgroundImage : 'url('+require('../../images/Famille.jpg')+')',  backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', width : '40%', marginLeft : 'auto', marginRight : 'auto', height : 400, marginBottom : 20, display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                    <a rel = 'noopener noreferrer' target = '_blank' href = 'https://www.youtube.com/watch?v=73Yqk3ytXMs&t=32s'>
                        <img
                            style={{height:80, width : 80, borderRadius : 40}}
                            src = {gifPlayer}
                            alt = ''
                            // to put request to youtube api before playing
                        />  
                    </a>
                </div>
            </div>
            <div id = 'mainContent' className = 'container' style={{width : '40%', marginLeft : 'auto', marginRight : 'auto', marginTop : 300}}>
                <p style = {{textAlign: "center", color: '#733b83', fontSize: 28, fontWeight: 'bold'}}> Our projects in planning and execution in Kinshasa </p> <br /> < br />
                <Grid container style={{pading: 50}}>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {ecole} alt = 'image' style={{width: '100%'}} />
                        <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>The construction of a school (center) for vocational training for poor young girls and single mothers</p>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {auto} alt = 'image' style={{width: '100%'}} />
                        <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>Empowerment of Congolese women through entrepreneurship</p>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {agri} alt = 'image' style={{width: '100%'}} />
                        <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>Farming in rural areas to fight against malnutrition</p>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {loreal} alt = 'image' style={{width: '100%'}} />
                        <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>The implementation of the <b>l'Oréal Paris company</b> in Kinshasa.</p>
                    </Grid>
                </Grid>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default ProjectsE