import React from 'react';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer'; 

//images 

import vision from '../images/pro.png';
import gifPlayer from '../images/playing.gif';

const Projects = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div id = 'introAbout' style = {{backgroundImage : 'url('+require('../images/bgVision.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {vision} alt = ''/><br /><br />
                <h2>Nos Projets</h2>
            </div>
            <div style={{height : 450, backgroundImage : 'url('+require('../images/realisations.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', paddingTop : 300, width : '40%', marginLeft : 'auto', marginRight : 'auto', height : 250, marginBottom : 30}}>
                <div className = 'videoBack' style = {{ backgroundImage : 'url('+require('../images/Famille.jpg')+')',  backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}>
                    <a rel = 'noopener noreferrer' target = '_blank' href = 'https://www.youtube.com/watch?v=73Yqk3ytXMs&t=32s'>
                        <img
                            src = {gifPlayer}
                            alt = ''
                            // to put request to youtube api before playing
                        />  
                    </a>
                </div>
            </div>
            <div id = 'mainContent' className = 'container' style={{width : '40%', marginLeft : 'auto', marginRight : 'auto'}}>
                <p style = {{textAlign:"center", color : '#733b83', fontSize : 28, fontWeight:'bold'}}>Nos projets en cours de planification et exécution à Kinshasa</p><br /><br />
                <p style = {{textAlign:"justify"}}>• La construction d’une école (d’un centre ) de formations professionnelles pour jeunes filles, filles-mères démunies ;</p><br />
                <p style = {{textAlign:"justify"}}>• L’autonomisation de la femme congolaise par l’entrepreneuriat;</p><br />
                <p style = {{textAlign:"justify"}}>• L’exploitation agricole en milieu rural pour lutter contre la malnutrition;</p><br />
                <p style = {{textAlign:"justify"}}>• L’implémentation de l’entreprise <b>l'Oréal Paris</b> à Kinshasa.</p><br />
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default Projects