import React from 'react';
import {
    Grid
} from '@material-ui/core';
import data from '../../helpers/Eng/data.json';
import oreilleIcon from '../../images/ecouteIcon.png';
import okIcon from '../../images/okIcon.png';
import feuilleIcon from '../../images/feuilleIcon.png';
import gifPlayer from '../../images/playing.gif';
import JustifiedGrid from 'react-justified-grid';
// Images 
import gal1 from '../../images/gal2.JPG';
import gal2 from '../../images/gal3.JPG';
import gal3 from '../../images/gal2e.JPG';
import gal4 from '../../images/gal5.JPG';
import gal6 from '../../images/gal6.JPG';
import gal5 from '../../images/gal15.JPG';
import gal7 from '../../images/gal7.JPG';
import gal8 from '../../images/gal8.JPG';
import gal9 from '../../images/gal2e.JPG';
import gal10 from '../../images/toput.jpeg';
import gal11 from '../../images/gal11.JPG';
import gal12 from '../../images/gal12.JPG';
import gal13 from '../../images/gal13.JPG';
import gal14 from '../../images/gal14.JPG';
import gal15 from '../../images/gal15.JPG';
import gal16 from '../../images/gal16.JPG';
import gal20 from '../../images/gal20.JPG';
import gal21 from '../../images/gal21.jpeg';
import gal22 from '../../images/gal22.jpeg';
import gal23 from '../../images/gal23.jpeg';
import gal24 from '../../images/gal2e.JPG';

// all images

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
            <div>
              <h2 style = {{textAlign : 'end', marginRight : '5%', marginTop : '5%'}}>
                Our <br />
                Achievements <br />
              </h2>
              <JustifiedGrid
                gutter={1}
                images={[
                  {
                    height: 182,
                    src: gal1,
                    width: 274
                  },
                  {
                    height: 182,
                    src: gal2,
                    width: 243
                  },
                  {
                    height: 182,
                    src: gal3,
                    width: 272
                  },
                  {
                    height: 182,
                    src: gal4,
                    width: 199
                  },
                  {
                    height: 172,
                    src: gal5,
                    width: 259
                  },
                  {
                    height: 172,
                    src: gal6,
                    width: 240
                  },
                  {
                    height: 172,
                    src: gal7,
                    width: 260
                  },
                  {
                    height: 172,
                    src: gal8,
                    width: 229
                  },
                  {
                    height: 204,
                    src: gal9,
                    width: 272
                  },
                  {
                    height: 204,
                    src: gal10,
                    width: 153
                  },
                  {
                    height: 204,
                    src: gal11,
                    width: 136
                  },
                  {
                    height: 204,
                    src: gal12,
                    width: 153
                  },
                  {
                    height: 204,
                    src: gal13,
                    width: 270
                  },
                  {
                    height: 173,
                    src: gal14,
                    width: 224
                  },
                  {
                    height: 173,
                    src: gal15,
                    width: 231
                  },
                  {
                    height: 173,
                    src: gal16,
                    width: 272
                  },
                  {
                    height: 173,
                    src: gal11,
                    width: 261
                  },
                  {
                    height: 221,
                    src: gal15,
                    width: 260
                  },
                  {
                    height: 221,
                    src: gal10,
                    width: 166
                  },
                  {
                    height: 221,
                    src: gal20,
                    width: 295
                  },
                  {
                    height: 173,
                    src: gal21,
                    width: 231
                  },
                  {
                    height: 173,
                    src: gal22,
                    width: 260
                  },
                  {
                    height: 173,
                    src: gal23,
                    width: 235
                  },
                  {
                    height: 173,
                    src: gal24,
                    width: 262
                  },
                  {
                    height: 198,
                    src: gal12,
                    width: 263
                  },
                ]}
                maxRowHeight={150}
                rows={undefined}
                showIncompleteRow={false}
                style={{margin : '5%'}}
              />
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