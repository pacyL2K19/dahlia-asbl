import React from 'react';
import { Grid } from '@material-ui/core';
import Footer from '../components/Footer';
import page from '../images/page.png';
import insta from '../images/insta.png';
import link from '../images/link.png';

const Founder = () => {
    return (
        <div id = 'founder'>
            <div style = {{backgroundImage : 'url('+require('../images/bgVision1.jpg')+')', display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 40, marginTop: -20, backgroundRepeat : 'no-repeat', backgroundPosition : 'center', backgroundSize : 'cover'}}>
                <img src = {page} alt = '' />
                <h2 style = {{color : 'white', margin : 10}}>La Fondatrice</h2>
            </div>
            <div className = 'container main'>
                <Grid container>
                    <Grid
                        item 
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        className = 'elmtFounder'
                    >
                        <div className = 'divElmt' style = {{ backgroundImage : 'url('+require('../images/Fam.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>

                        </div>
                    </Grid>
                    <Grid
                        item 
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        className = 'elmtFounder'
                    >
                        <div className = 'textBox'>
                            <h2>Nadège Dubier</h2>
                            <p><em>Fondatrice de l'ASBL Dahlia</em></p>
                            <p><em>Philanthrope - Femme de coeur</em></p>
                            <p>
                                Derrière Dahlia il y a Nadège Dubier. Depuis quelques années elle oeuvre pour redonner sa place à la femme marginaliser en l’aidant à être confiante, forte et indépendante. <br />
                                Elle contribue aussi à la rééducation des enfants défavorisés, à leur réintégration et à leur réinsertion sociale.   Sa philosophie : « Faire une plus grande table et non une plus haute clôture »
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid
                        item 
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        className = 'elmtFounder'
                    >
                        <div className = 'textBox'>
                            <p>
                                Personnalité publique, mère de 3 enfants, entrepreneur et philanthrope, Nadège a toujours pensé que la vie n’a pas de prix. C’est pourquoi se faire plaisir et faire ce bien autour de soi qui permet d’embellir la vie des plus démunies et  la rendre plus simple sont ses aspirations profondes.<br />

                                Pour ce faire, commencer par de petites actions comme l’accès à l’eau qui est la première chose que Dieu a créé, est primordiale.<br />

                                «  S’intéresser à des personnes très souvent exclues de la société : les femmes et les enfants.
                                Pourtant la femme donne la vie ! »
                                <div style = {{marginTop  : 50}} className = 'iconSection'>
                                    <a target = '_blank' rel = 'noopener noreferrer' href = 'https://www.instagram.com/damedubier/'><img style = {{height : 90, width : 90}} src = {insta} alt = ''/></a>
                                    <a target = '_blank' rel = 'noopener noreferrer' href= 'https://www.linkedin.com/in/nad%C3%A8ge-dubier-27077685/'><img style = {{height : 80, width : 80}} src = {link} alt = ''/></a>
                                </div>
                            </p>
                        </div>
                    </Grid>

                    <Grid
                        item 
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        className = 'elmtFounder'
                    >
                        <div className = 'divElmt' style = {{ backgroundImage : 'url('+require('../images/action.JPG')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>

                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )
}

export default Founder