import React from 'react';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer'; 

//images 

import vision from '../images/vision.png';
import support from '../images/Volunteer.png';
import donataire from '../images/donataire.png';
import dialogue from '../images/dialogue.png';
import cerveau from '../images/cerveau.png';
import { Grid } from '@material-ui/core';

const Vision = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div id = 'introAbout' style = {{backgroundImage : 'url('+require('../images/bgVision1.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {vision} alt = ''/><br /><br />
                <h2>Notre vision</h2>
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
                        <p style = {{textAlign:"justify"}}>Préserver et partager sont les mots-clés d’une vision renouvelée de la prospérité et d’une redéfinition du progrès qui placent comme critères premiers le bien-être et l’épanouissement de tous les hommes ainsi que le respect de la vie sous toutes ses formes.</p><br /><br />
                        <p style = {{textAlign:"justify"}}>Contribuer à une société́ congolaise dynamique où la femme sera libre & forte, valorisée et apportera du progrès et un regard innovant autour des valeurs de travail.</p>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../images/second.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 400}}>

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
                        <div style = {{backgroundImage : 'url('+require('../images/first.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 400}}>

                        </div>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}  
                        style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', paddingLeft : 30}}  
                    >
                        <h5 style = {{textAlign:"justify"}}>Dahlia asbl a pour mission de :</h5>
                        <p style = {{textAlign:"justify"}}>• Donner aux enfants l’espoir à un avenir meilleur ;</p><br />
                        <p style = {{textAlign:"justify"}}>• Apprendre aux enfants des valeurs morales pour leurs épanouissements ;</p><br />
                        <p style = {{textAlign:"justify"}}>• Faire la promotion de la femme dans le milieu professionnel;</p><br />
                        <p style = {{textAlign:"justify"}}>• Mettre sur pieds des projets de développement durable pouvant faciliter l’insertion socio-économique de la femme et de l’enfant ;</p><br />
                        <p style = {{textAlign:"justify"}}>• Soutenir la formation scolaire et la préparation professionnelle des enfants n’ayant pas la possibilité d’étudier.</p><br />
                    </Grid>
                </Grid>
            </div>
            <div id = 'iconSide'>
                <Grid container>
                    <Grid
                        item
                        xs = {12}
                        md = {4}
                        lg = {4}
                        xl = {4}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 400, backgroundColor : '#F2F2F2'}}
                    >
                        <img src = {dialogue} alt = ''style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Dialogue</h2>
                        <p style = {{textAlign : 'center'}}>Parce que nous ne pouvons agir seuls, nous plaçons l’écoute, le respect, l’échange, la coopération et la proposition au cœur de nos actions.</p><br />
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {4}
                        lg = {4}
                        xl = {4}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 400, backgroundColor : '#ffffff'}}
                    >
                        <img src = {cerveau} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Sobriété</h2>
                        <p style = {{textAlign : 'center'}}>Dans un monde où les espèces et les ressources naturelles se raréfient, où les inégalités se creusent, nous souhaitons distinguer l’essentiel du superflu.</p><br />
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {4}
                        lg = {4}
                        xl = {4}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 400, backgroundColor : '#F2F2F2'}}
                    >
                        <img src = {donataire} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Solidarité</h2>
                        <p style = {{textAlign : 'center'}}>Parce que les destins de la Nature et de l’Homme sont interdépendants, nous avons le devoir d’œuvrer pour la préservation de l’ensemble du vivant, aujourd’hui et pour demain.</p><br />
                    </Grid>
                </Grid>
            </div>
            <div style = {{backgroundImage : 'url('+require('../images/bgHome.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', padding : 50, display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
                <img src = {support} alt = '' style = {{height : 100, width : 100}}/> <br />
                <h3 style = {{color : 'white', textAlign : 'center', height : 50}}>Devenir volontaire</h3><br />
                <p style = {{color : 'white', textAlign : 'center', height : 30}}>Devenez volontaires pour participer à nos campagnes de sensibilisation et de donation </p>
                <button
                    type = 'button'
                    className = 'donateBtn'
                    style = {{width : 300, padding : 20, height : 80, fontSize : 20, marginTop : 30}}
                    onClick = {() => console.log('Ok')}
                >
                    INSCRIVEZ-VOUS
                </button>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default Vision