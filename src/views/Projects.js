import React from 'react';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer'; 

//images 

import vision from '../images/pro.png';
import gifPlayer from '../images/playing.gif';
import { Grid } from '@material-ui/core';
import agri from '../images/agri.jpg';
import auto from '../images/autonomie.jpg';
import ecole from '../images/ecole.jpg';
import loreal from '../images/loreal.jpg';

const Projects = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div id = 'introAbout' style = {{backgroundImage : 'url('+require('../images/bgVision.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {vision} alt = ''/><br /><br />
                <h2>Nos Projets</h2>
            </div>
            <div style={{height : 450, backgroundImage : 'url('+require('../images/realisations.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', paddingTop : 300, borderRadius : 5}}>
                <div className = 'videoBack' style = {{ backgroundImage : 'url('+require('../images/boss1.jpg')+')',  backgroundPosition : 'center', backgroundSize : '90%', backgroundRepeat : 'no-repeat', width : '35%', marginLeft : 'auto', marginRight : 'auto', height : 500, marginBottom : 20, display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
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
            <div id = 'mainContent' style={{marginTop : 380}}>
                <p style = {{textAlign:"center", color : '#733b83', fontSize : 35, fontWeight:'bold'}}>Nos projets en cours de planification et exécution à Kinshasa</p><br />
                <Grid container style={{pading: 80}} className="container">
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        {/* <img src = {ecole} alt = 'image' style={{width: '100%', height: 400}} /> */}
                        <p style = {{textAlign:"justify", fontSize: 28, fontWeight: 'bold', marginTop: 15}}>La construction d’une école (d’un centre ) de formations professionnelles pour jeunes filles, filles-mères démunies</p>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {ecole} alt = 'image' style={{width: '100%', height: 400}} />
                        {/* <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>L’autonomisation de la femme congolaise par l’entrepreneuriat</p> */}
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <p style = {{textAlign:"justify", fontSize: 28, fontWeight: 'bold', marginTop: 15}}>L’autonomisation de la femme congolaise par l’entrepreneuriat</p>
                        {/* <img src = {agri} alt = 'image' style={{width: '100%', height: 400}} /> */}
                        {/* <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>L’exploitation agricole en milieu rural pour lutter contre la malnutrition</p> */}
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {auto} alt = 'image' style={{width: '100%', height: 400}} />
                        {/* <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>L’implémentation de l’entreprise <b>l'Oréal Paris</b> à Kinshasa.</p> */}
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        {/* <img src = {ecole} alt = 'image' style={{width: '100%', height: 400}} /> */}
                        <p style = {{textAlign:"justify", fontSize: 28, fontWeight: 'bold', marginTop: 15}}>L’exploitation agricole en milieu rural pour lutter contre la malnutrition</p>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {agri} alt = 'image' style={{width: '100%', height: 400}} />
                        {/* <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>L’autonomisation de la femme congolaise par l’entrepreneuriat</p> */}
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        {/* <img src = {ecole} alt = 'image' style={{width: '100%', height: 400}} /> */}
                        <p style = {{textAlign:"justify", fontSize: 28, fontWeight: 'bold', marginTop: 15}}>L’implémentation de l’entreprise <b>l'Oréal Paris</b> à Kinshasa.</p>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {loreal} alt = 'image' style={{width: '100%', height: 400}} />
                        {/* <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>L’autonomisation de la femme congolaise par l’entrepreneuriat</p> */}
                    </Grid>
                </Grid>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default Projects