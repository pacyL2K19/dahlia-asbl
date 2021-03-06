import React from 'react';
import { Grid } from '@material-ui/core';
import Footer from '../../components/Eng/Footer';
import page from '../../images/page.png';
import insta from '../../images/insta.png';
import link from '../../images/link.png';

const FounderE = () => {
    return (
        <div id = 'founderE'>
            <div style = {{backgroundImage : 'url('+require('../../images/bgVision1.jpg')+')', display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', padding : 40, marginTop: -20, backgroundRepeat : 'no-repeat', backgroundPosition : 'center', backgroundSize : 'cover'}}>
                <img src = {page} alt = '' />
                <h2 style = {{color : 'white', margin : 10}}>The founder</h2>
            </div>
            <div className = 'container main'>
                <Grid container style = {{paddingBottom : 100}}>
                    <Grid
                        item 
                        xs = {12}
                        md = {6}
                        lg = {6}
                        xl = {6}
                        className = 'elmtFounder'
                    >
                        <div className = 'divElmt' style = {{ backgroundImage : 'url('+require('../../images/Fam.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>

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
                            <p><em>Founder of Dahlia-asbl</em></p>
                            <p><em>Philanthropist - Woman of heart</em></p>
                            <p>
                                Behind Dahlia there is Nadège Dubier. For several years now, she has been working to give back her place to marginalized women by helping them to be confident, strong and independent.<br />
                                It also contributes to the rehabilitation of disadvantaged children, their reintegration and their social reintegration. His philosophy: "Make a bigger table and not a higher fence"
                            </p>
                            <p>
                                Public figure, mother of 3 children, entrepreneur and philanthropist, Nadège has always believed that life is priceless. This is why having fun and doing this good around you which makes it possible to embellish the lives of the most disadvantaged and to make it simpler are his deepest aspirations. <br />

                                To do this, starting with small actions like getting access to water, which is the first thing God created, is essential. <br />

                                “Focus on people who are very often excluded from society: women and children.
                                Yet woman gives life! "
                                <div style = {{marginTop  : 50}} className = 'iconSection'>
                                    <a target = '_blank' rel = 'noopener noreferrer' href = 'https://www.instagram.com/damedubier/'><img style = {{height : 90, width : 90}} src = {insta} alt = ''/></a>
                                    <a target = '_blank' rel = 'noopener noreferrer' href= 'https://www.linkedin.com/in/nad%C3%A8ge-dubier-27077685/'><img style = {{height : 80, width : 80}} src = {link} alt = ''/></a>
                                </div>
                            </p>
                        </div>
                    </Grid>
                </Grid>
                {/* <Grid container>
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
                                Public figure, mother of 3 children, entrepreneur and philanthropist, Nadège has always believed that life is priceless. This is why having fun and doing this good around you which makes it possible to embellish the lives of the most disadvantaged and to make it simpler are his deepest aspirations. <br />

                                To do this, starting with small actions like getting access to water, which is the first thing God created, is essential. <br />

                                “Focus on people who are very often excluded from society: women and children.
                                Yet woman gives life! "
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
                        <div className = 'divElmt' style = {{ backgroundImage : 'url('+require('../../images/action.JPG')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>

                        </div>
                    </Grid>
                </Grid> */}
            </div>
            <Footer />
        </div>
    )
}

export default FounderE