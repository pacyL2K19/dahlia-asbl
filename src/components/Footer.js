import React from 'react';
import { Grid } from '@material-ui/core';
//images

import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';

const Footer = () => {
    return (
        <div id = 'footer'>
            <div className = 'container mainFooter'>
                <Grid container>
                    <Grid
                        item
                        xs = {6}
                        md = {6}
                        xl = {3}
                        lg = {3}
                    >
                        <h3>INFORMATIONS</h3>
                        <p>Dahlia asb est la pour redonner le sourire aux femmes et aux enfants, vous pouvez egalement participer en faisant un don a ces enfants</p>
                    </Grid>
                    <Grid
                        item
                        xs = {6}
                        md = {6}
                        xl = {3}
                        lg = {3}
                    >
                        <h3>CONTACTS</h3>
                        <p>04, Av. Frédéric, Q/Kimpe, Kinshasa-Ngaliema</p><br />
                        <p>Phone : +243 819 740 723</p> <br />
                        <p>Email : info@dahlia-asbl.org</p>
                    </Grid>
                    <Grid
                        item
                        xs = {6}
                        md = {6}
                        xl = {3}
                        lg = {3}
                    >
                        <h3>LIENS IMPORTANTS</h3>
                        <ul>
                            <li><a href = '#ok' >Faire un don maintenant</a></li>
                            <li><a href = '#ok' >Devenir volontaire</a></li>
                            <li><a href = '#ok' >Nous supporter</a></li>
                        </ul>
                    </Grid>
                    <Grid
                        item
                        xs = {6}
                        md = {6}
                        xl = {3}
                        lg = {3}
                    >
                        <h3>GALLERIE</h3>
                        <Grid container>
                        <Grid 
                                item 
                                xs = {4}
                                lg ={4}
                                md = {4}
                                xl = {4}
                            >
                                <img src = {first} alt = '' style = {{height : 50}}/>
                            </Grid>
                            <Grid 
                                item 
                                xs = {4}
                                lg ={4}
                                md = {4}
                                xl = {4}
                            >
                                <img src = {second} alt = '' style = {{height : 50}}/>
                            </Grid>
                            <Grid 
                                item 
                                xs = {4}
                                lg ={4}
                                md = {4}
                                xl = {4}
                            >
                                <img src = {third} alt = '' style = {{height : 50}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div id = 'signature'>
                copyright &copy; 2020 Dahlia-asbl - Designed by Cedric Mangosa
            </div>
        </div>
    )
}

export default Footer