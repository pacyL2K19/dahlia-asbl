import React from 'react';
import {
    Grid
} from '@material-ui/core';
import data from '../../helpers/Eng/data.json';
import oreilleIcon from '../../images/ecouteIcon.png';
import okIcon from '../../images/okIcon.png';
import feuilleIcon from '../../images/feuilleIcon.png';
import gifPlayer from '../../images/playing.gif';

const MainBody = () => {
    return (
        <div id = 'mainBody'>
            <div id = 'firstContentE' className = 'container'>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}
                    >
                        <h2 style = {{textAlign : 'end'}}>
                            We are working <br />
                            To all who are<br />
                            In need<br />
                        </h2>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}
                    >
                        <p style = {{textAlign : 'start', color : '#5a5a5a'}}>
                            We work with all those who are in need: Contribute to a dynamic Congolese society where women will be free, strong, valued and will bring progress, give children access to education to ensure them a better future and a better future. innovative look around the values ​​of work.
                        </p>
                    </Grid>
                </Grid>
            </div>
            <div id = 'iconContentsE' className = 'container'>
                 <Grid
                    container
                 >
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >
                        <div className = 'itemIconContent'>
                            <img 
                                style = {{backgroundColor : "white"}}
                                src = {oreilleIcon}
                                alt = ''
                            />
                            <p style = {{textAlign : 'center'}}>
                                {data.bodyElements[0].description}
                            </p>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >
                        <div className = 'itemIconContent'>
                            <img 
                                style = {{backgroundColor : "white"}}
                                src = {okIcon}
                                alt = ''
                            />
                            <p style = {{textAlign : 'center'}}>
                                {data.bodyElements[1].description}
                            </p>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >
                        <div className = 'itemIconContent'>
                            <img 
                                style = {{backgroundColor : "white"}}
                                src = {feuilleIcon}
                                alt = ''
                            />
                            <p style = {{textAlign : 'center'}}>
                                {data.bodyElements[2].description}
                            </p>
                        </div>
                    </Grid>
                 </Grid>
            </div>
            <div id = 'videoBanE' className = 'container'>
                <Grid 
                    container
                >
                    <Grid
                        item
                        className = 'introVideo'
                        xs = {12}
                        md = {12}
                        xl = {4}
                        lg = {4}
                    >
                        <div className = 'introIn'>
                            <h3>Social welfare, <br /> This is our goal</h3>
                            <p>
                                Our objective is to promote the social well-being of disadvantaged children in general and particularly women, and people marginalized in society through re-education, reintegration, social reintegration and mutual aid.                            </p>
                            <p className = 'btnPlus'>
                                Learn more 
                            </p>
                        </div>
                        
                    </Grid>
                    <Grid
                        item
                        className = 'videoContent'
                        xs = {12}
                        md = {12}
                        xl = {8}
                        lg = {8}
                    >
                        <h4>We have a mission</h4><br />
                        <h2>Help those who need it</h2>
                        <div className = 'videoBack' style = {{ backgroundImage : 'url('+require('../../images/Famille.jpg')+')',  backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}>
                            <a rel = 'noopener noreferrer' target = '_blank' href = 'https://www.youtube.com/watch?v=73Yqk3ytXMs&t=32s'>
                                <img
                                    src = {gifPlayer}
                                    alt = ''
                                    // to put request to youtube api before playing
                                />  
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div id = 'lastContentE' style = {{backgroundImage : 'url('+require('../../images/bgHome.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>
                <Grid container>
                    <Grid 
                        item
                        className = 'unEmpty'
                        xs = {12}
                        md = {6}
                        xl = {6}
                        lg = {6}
                    >
                        <p>We exist for</p>
                        <h3>Giving every woman and child the chance to succeed in their future</h3>
                        <p>At Dahlia asbl, we are convinced that knowledge <br /> and knowledge are the keys to a better world.</p>
                        <Grid container className = 'btnGroupL'>
                            <Grid 
                                xs = {12}
                                md = {6}
                                xl = {6}
                                lg = {6}
                                item
                            >
                                <p>MAKE A DONATION</p>
                            </Grid>
                            <Grid 
                                xs = {12}
                                md = {6}
                                xl = {6}
                                lg = {6}
                                item
                            >
                                <p>DBECOME VOLUNTEER</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid 
                        item
                        className = 'empty1'
                        xs = {12}
                        md = {6}
                        xl = {6}
                        lg = {6}
                    >
                        {/* <div>
                            <p></p>
                        </div> */}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default MainBody