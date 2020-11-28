import React from 'react';
import { Grid } from '@material-ui/core';
//images

import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';
import fourth from '../images/fourth.JPG';
import fith from '../images/fith.JPG';
import sixth from '../images/sixth.JPG';
import eigth from '../images/eigth.JPG';
import nineth from '../images/nineth.JPG';

const Footer = () => {
    return (
        <div id = 'footer'>
            <div className = 'mainFooter'>
                <div className = 'container'>
                    <Grid container>
                        <Grid
                            item
                            xs = {12}
                            md = {6}
                            xl = {3}
                            lg = {3}
                        >
                            <h3>INFORMATIONS</h3><br />
                            <p style = {{paddingRight : 10}}>Dahlia asbl est là pour redonner le sourire aux femmes et aux enfants, vous pouvez également participer en faisant un don à ces enfants</p>
                        </Grid>
                        <Grid
                            item
                            xs = {12}
                            md = {6}
                            xl = {3}
                            lg = {3}
                        >
                            <h3>CONTACTS</h3><br />
                            <p style={{marginBottom : 15}}>04, Av. Frédéric, Q/Kimpe, Kinshasa-Ngaliema</p>
                            <p style={{marginBottom : 15}}><a href = 'tel:0819740723'>Phone : +243 819 740 723</a></p>
                            <p style={{marginBottom : 15}}><a href = 'mailto:info@dahlia-asbl.org'>Email : info@dahlia-asbl.org</a></p>
                        </Grid>
                        <Grid
                            item
                            xs = {12}
                            md = {6}
                            xl = {3}
                            lg = {3}
                        >
                            <h3>LIENS IMPORTANTS</h3><br />
                            <ul style = {{marginLeft : 10}}>
                                <li><a href = '#ok' >Faire un don</a></li><br />
                                <li><a href = '#ok' >Devenir volontaire </a></li><br />
                                <li><a href = '#ok' >Nous soutenir </a></li><br />
                            </ul>
                        </Grid>
                        <Grid
                            item
                            xs = {12}
                            md = {6}
                            xl = {3}
                            lg = {3}
                        >
                            <h3>GALERIE</h3><br />
                            <Grid container>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <a target = '_blank' rel = 'noopener noreferrer' href =  {first}><img src = {first} alt = '' style = {{height : 50, margin : 5}}/></a>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <a target = '_blank' rel = 'noopener noreferrer' href =  {second}><img src = {second} alt = '' style = {{height : 50, margin : 5}}/></a>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <a target = '_blank' rel = 'noopener noreferrer' href =  {third}><img src = {third} alt = '' style = {{height : 50, margin : 5}}/></a>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <a target = '_blank' rel = 'noopener noreferrer' href =  {fourth}><img src = {fourth} alt = '' style = {{height : 50, margin : 5}}/></a>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <a target = '_blank' rel = 'noopener noreferrer' href =  {fith}><img src = {fith} alt = '' style = {{height : 50, margin : 5}}/></a>
                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <a target = '_blank' rel = 'noopener noreferrer' href =  {sixth}><img src = {sixth} alt = '' style = {{height : 50, margin : 5}}/></a>

                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <a target = '_blank' rel = 'noopener noreferrer' href =  {eigth}><img src = {eigth} alt = '' style = {{height : 50, margin : 5}}/></a>

                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <a target = '_blank' rel = 'noopener noreferrer' href =  {second}><img src = {second} alt = '' style = {{height : 50, margin : 5}}/></a>

                                </Grid>
                                <Grid 
                                    item 
                                    xs = {4}
                                    lg ={4}
                                    md = {4}
                                    xl = {4}
                                >
                                    <a target = '_blank' rel = 'noopener noreferrer' href =  {nineth}><img src = {nineth} alt = '' style = {{height : 50, margin : 5}}/></a>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div id = 'signature'>
                &copy; 2020 Dahlia-asbl Cabinet de conseil <a style = {{color : '#926ba1'}} href = 'https://www.instagram.com/aurelia_mpiry/'>AM Consulting</a> site ré́alisé́ par Cedric Mangosa
            </div>
        </div>
    )
}

export default Footer