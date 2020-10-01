import React from 'react';
import PreFooter from '../../components/Eng/PreFooter';
import Footer from '../../components/Eng/Footer'; 

//images 

import vision from '../../images/vision.png';
import support from '../../images/Volunteer.png';
import donataire from '../../images/donataire.png';
import dialogue from '../../images/dialogue.png';
import cerveau from '../../images/cerveau.png';
import { Grid } from '@material-ui/core';

const VisionE = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div id = 'introAboutE' style = {{backgroundImage : 'url('+require('../../images/bgVision1.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                <img src = {vision} alt = ''/><br /><br />
                <h2>Our vision</h2>
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
                        <p style = {{textAlign:"justify"}}>Preservation and sharing are the keywords of a renewed vision of prosperity and of a redefinition of progress which place as primary criteria the well-being and development of all the people as well as respect for life in all its aspects.</p><br /><br />
                        <p style = {{textAlign:"justify"}}>Contribute to a dynamic Congolese society where women will be free & strong, valued and will bring progress and an innovative perspective around work values.</p>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}    
                    >
                        <div style = {{backgroundImage : 'url('+require('../../images/second.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 400}}>

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
                        <div style = {{backgroundImage : 'url('+require('../../images/first.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', height : 400}}>

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
                        <h5 style = {{textAlign:"justify"}}>DAHLIA ASBL'S MISSION IS TO:</h5>
                        <p style = {{textAlign:"justify"}}>• Give children hope for a better future;</p><br />
                        <p style = {{textAlign:"justify"}}>• Teach children moral values for their development;</p><br />
                        <p style = {{textAlign:"justify"}}>• Promote women in the professional environment;</p><br />
                        <p style = {{textAlign:"justify"}}>• Set up sustainable development projects that can facilitate the socio-economic integration of women and children;</p><br />
                        <p style = {{textAlign:"justify"}}>• Support school training and professional preparation for children who do not have the opportunity to study.</p><br />
                    </Grid>
                </Grid>
            </div>
            <div id = 'iconSideE'>
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
                        <p style = {{textAlign : 'center'}}>Because we cannot act alone, we place listening, respect, exchange, cooperation and proposal at the heart of our actions.</p><br />
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
                        <h2 style = {{textAlign : 'center'}}>Sobriety</h2>
                        <p style = {{textAlign : 'center'}}>In a world where species and natural resources are becoming scarce, where inequalities are growing, we want to distinguish the essential from the superfluous.</p><br />
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
                        <h2 style = {{textAlign : 'center'}}>Solidarity</h2>
                        <p style = {{textAlign : 'center'}}>Because the destinies of Nature and human are interdependent, we have a duty to work for the preservation of all living things, now and for the future.</p><br />
                    </Grid>
                </Grid>
            </div>
            <div style = {{backgroundImage : 'url('+require('../../images/bgHome.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', padding : 50, display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
                <img src = {support} alt = '' style = {{height : 100, width : 100}}/> <br />
                <h3 style = {{color : 'white', textAlign : 'center', height : 50}}>Become a volunteer</h3><br />
                <p style = {{color : 'white', textAlign : 'center', height : 30}}>Become a volunteer to participate in our awareness and donation campaigns.</p>
                <button
                    type = 'button'
                    className = 'donateBtn'
                    style = {{width : 300, padding : 20, height : 80, fontSize : 20, marginTop : 30}}
                    onClick = {() => console.log('Ok')}
                >
                    SUBSCRIBE
                </button>
            </div>
            <PreFooter />
            <Footer />
        </div>
    )
}

export default VisionE