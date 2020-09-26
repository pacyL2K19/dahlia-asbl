import React from 'react';
import { Grid } from '@material-ui/core';
//images

import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';

const Footer = () => {
    return (
        <div id = 'footer'>
            <div className = 'mainFooter'>
                <div className = 'container'>
                    <Grid container>
                        <Grid
                            item
                            xs = {6}
                            md = {6}
                            xl = {3}
                            lg = {3}
                        >
                            <h3>INFORMATIONS</h3><br />
                            <p style = {{paddingRight : 10}}>Dahlia asbl est la pour redonner le sourire aux femmes et aux enfants, vous pouvez egalement participer en faisant un don a ces enfants</p>
                        </Grid>
                        <Grid
                            item
                            xs = {6}
                            md = {6}
                            xl = {3}
                            lg = {3}
                        >
                            <h3>CONTACTS</h3><br />
                            <p style={{marginBottom : 10}}>04, Av. Frédéric, Q/Kimpe, Kinshasa-Ngaliema</p>
                            <p>Phone : +243 819 740 723</p>
                            <p>Email : info@dahlia-asbl.org</p>
                        </Grid>
                        <Grid
                            item
                            xs = {6}
                            md = {6}
                            xl = {3}
                            lg = {3}
                        >
                            <h3>LIENS IMPORTANTS</h3><br />
                            <ul style = {{marginLeft : 10}}>
                                <li><a href = '#ok' >Faire un don maintenant</a></li><br />
                                <li><a href = '#ok' >Devenir volontaire</a></li><br />
                                <li><a href = '#ok' >Nous supporter</a></li><br />
                            </ul>
                        </Grid>
                        <Grid
                            item
                            xs = {6}
                            md = {6}
                            xl = {3}
                            lg = {3}
                        >
                            <h3>GALLERIE</h3><br />
                            <Grid container>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <img src = {first} alt = '' style = {{height : 50, margin : 5}}/>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <img src = {second} alt = '' style = {{height : 50, margin : 5}}/>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <img src = {third} alt = '' style = {{height : 50, margin : 5}}/>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <img src = {first} alt = '' style = {{height : 50, margin : 5}}/>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <img src = {first} alt = '' style = {{height : 50, margin : 5}}/>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <img src = {first} alt = '' style = {{height : 50, margin : 5}}/>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <img src = {first} alt = '' style = {{height : 50, margin : 5}}/>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <img src = {first} alt = '' style = {{height : 50, margin : 5}}/>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <img src = {first} alt = '' style = {{height : 50, margin : 5}}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div id = 'signature'>
                &copy; 2020 Dahlia-asbl Cabinet de conseil <a href = 'https://www.instagram.com/aurelia_mpiry/'>AM Consulting</a> site ré́alisé́ par Cedric Mangosa
            </div>
        </div>
    )
}

export default Footer