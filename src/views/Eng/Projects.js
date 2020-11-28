import React from 'react';
import PreFooter from '../../components/Eng/PreFooter';
import Footer from '../../components/Eng/Footer'; 

//images 

import {Grid} from '@material-ui/core';

import vision from '../../images/pro.png';
import gifPlayer from '../../images/playing.gif';
import agri from '../../images/agri.jpg';
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
                <div className = 'videoBack' style = {{ backgroundImage : 'url('+require('../../images/boss1.jpg')+')',  backgroundPosition : 'center', backgroundSize : '90%', backgroundRepeat : 'no-repeat', width : 400, marginLeft : 'auto', marginRight : 'auto', height : 500, marginBottom : 20, display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
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
            <div id = 'mainContent' className = 'container' style={{marginTop : 380}}>
                <p style = {{textAlign: "center", color: '#733b83', fontSize: 35, fontWeight: 'bold'}}> Our projects in planning and execution in Kinshasa </p> <br />
                <Grid container style={{pading: 80}} className="container">
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{paddingTop: 0, paddingLeft: 10, paddingRight: 10}}
                    >
                        {/* <img src = {ecole} alt = 'image' style={{width: '100%', height: 400}} /> */}
                        <p style = {{textAlign:"justify", fontSize:  32, fontWeight: 'bold', marginTop: 0}}  classNames="uppercase">The construction of a school (center) for vocational training for poor young girls and single mothers</p>
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
                        style={{paddingTop: 0, paddingLeft: 10, paddingRight: 10}}
                    >
                        <p style = {{textAlign:"justify", fontSize: 32, fontWeight: 'bold', marginTop: 0}}>Empowerment of Congolese women through entrepreneurship</p>
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
                        style={{paddingTop: 0, paddingLeft: 10, paddingRight: 10}}
                    >
                        {/* <img src = {ecole} alt = 'image' style={{width: '100%', height: 400}} /> */}
                        <p style = {{textAlign:"justify", fontSize: 32, fontWeight: 'bold', marginTop: 0}}>Farming in rural areas to fight against malnutrition</p>
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
                        style={{paddingTop: 0, paddingLeft: 10, paddingRight: 10}}
                    >
                        {/* <img src = {ecole} alt = 'image' style={{width: '100%', height: 400}} /> */}
                        <p style = {{textAlign:"justify", fontSize: 32, fontWeight: 'bold', marginTop: 0}}>The implementation of the <b>l'Oréal Paris company</b> in Kinshasa.</p>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {loreal} alt = 'image' style={{width: '100%', height: 400, borderStyle: "solid", borderWidth: 1, borderColor: '#733b83', borderRadius: 10}} />
                        {/* <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>L’autonomisation de la femme congolaise par l’entrepreneuriat</p> */}
                    </Grid>
                </Grid>
                {/* <Grid container style={{pading: 50}}>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        style={{padding: 10}}
                    >
                        <img src = {ecole} alt = 'image' style={{width: '100%', height: 400}} />
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
                        <img src = {auto} alt = 'image' style={{width: '100%', height: 400}} />
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
                        <img src = {agri} alt = 'image' style={{width: '100%', height: 400}} />
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
                        <img src = {loreal} alt = 'image' style={{width: '100%', height: 400}} />
                        <p style = {{textAlign:"justify", fontWeight: 'bold', marginTop: 15}}>The implementation of the <b>l'Oréal Paris company</b> in Kinshasa.</p>
                    </Grid>
                </Grid> */}
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default ProjectsE