import React from 'react';
import { Grid } from '@material-ui/core';
import Footer from '../components/Footer';
import page from '../images/page.png';

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
                        <div className = 'divElmt' style = {{ backgroundImage : 'url('+require('../images/founder.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>

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
                            <p>
                                Un soir, Nadège Dubier rencontre une petite fille, venue de très loin, qui lui expliqua ce dur parcours qu’elle doit faire quotidiennement pour trouver de l’eau potable pour elle et sa famille. Face à cette réalité, l’entreprise « Water Solutions » est née.<br /><br />
                                Depuis, cette rencontre, son parcours d’entrepreneur est en constante évolution : elle est la seule femme congolaise à tenir une entreprise experte dans la gestion de projet de forage.
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

                                «  L’eau c’est la vie ! C’est pourquoi nous devons préserver cette vie et la rendre accessible à tous » – Nadège Dubier<br />

                                « Je suis Nadége Dubier, une femme qui souhaite apporter un réel changement en facilitant l’accès à l’eau potable ! »<br />
                                <div style = {{marginTop : 50}} className = 'iconSection'>
                                    <a style = {{height : 100, width : 100}} href = '#top'><i className = 'fa fa-linkedin-square'></i></a>
                                    <a href = '#top'><i className = 'fa fa-twitter-square'></i></a>
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
                        <div className = 'divElmt' style = {{ backgroundImage : 'url('+require('../images/third.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>

                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )
}

export default Founder