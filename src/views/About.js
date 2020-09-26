import React from 'react';
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
            {/* <Navbar /> */}
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
                        style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', padding : 30}}  
                    >
                        <p style = {{textAlign : 'justify'}}>Dahlia asbl est née de notre volonté de donner à chaque femme et enfant les chances de réussir leur avenir.</p><br /><br />
                        <p style = {{textAlign : 'justify'}}>Chez Dahlia asbl, nous sommes convaincus que la connaissance et le savoir sont les clés d’un monde meilleur. Pourtant, l’accès à l’éducation ou/et la formation professionnelle reste encore une épreuve pour de nombreux jeunes à travers le monde.</p>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../images/mme.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 600}}>

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
                        style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', padding : 30}}  
                    >
                        <p style = {{textAlign : 'justify'}}>Dahlia asbl est une organisation non lucrative, qui a pour objectifs de promouvoir le bien être social des enfants défavorisés en général et particulièrement des femmes, et les personnes marginalisées dans la société par la rééducation, la réintégration, la réinsertion sociale et l’entraide.</p>
                    </Grid>
                </Grid>
            </div>
            <div id = 'iconSide'>
                <Grid container>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {3}
                        xl = {3}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 500, backgroundColor : '#F2F2F2'}}
                    >
                        <img src = {don} alt = ''style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Faire un Don</h2>
                        <p style = {{textAlign : 'center'}}>At quis risus sed vulputate odio ut enim blandit. Massa eget egestas purus viverra.</p><br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {() => console.log('Ok')}
                        >
                            Donate Now
                        </button>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {3}
                        xl = {3}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 500, backgroundColor : '#ffffff'}}
                    >
                        <img src = {cadeau} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Faire un cadeau</h2>
                        <p style = {{textAlign : 'center'}}>At quis risus sed vulputate odio ut enim blandit. Massa eget egestas purus viverra.</p><br />
                        {/* <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {() => console.log('Ok')}
                        >
                            Donate Now
                        </button> */}
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {3}
                        xl = {3}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 500, backgroundColor : '#F2F2F2'}}
                    >
                        <img src = {volontaire} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Devenir volontaire</h2>
                        <p style = {{textAlign : 'center'}}>At quis risus sed vulputate odio ut enim blandit. Massa eget egestas purus viverra.</p><br />
                        <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {() => console.log('Ok')}
                        >
                            En savoir plus
                        </button>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {6}
                        lg = {3}
                        xl = {3}
                        style = {{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 50, height : 500, backgroundColor : '#ffffff'}}
                    >
                        <img src = {donataire} alt = '' style ={{height : 100, width : 100}}/> <br /><br />
                        <h2 style = {{textAlign : 'center'}}>Donateur Individuel</h2>
                        <p style = {{textAlign : 'center'}}>At quis risus sed vulputate odio ut enim blandit. Massa eget egestas purus viverra.</p><br />
                        {/* <button
                            type = 'button'
                            className = 'donateBtn'
                            onClick = {() => console.log('Ok')}
                        >
                            Donate Now
                        </button> */}
                    </Grid>
                </Grid>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default About