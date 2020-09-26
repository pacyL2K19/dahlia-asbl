import React from 'react';
import dataJson from '../helpers/data.json';
import {
    Grid
} from '@material-ui/core';
import donaImg from '../images/Donation.png';
import voluntImg from '../images/Volunteer.png';
import supportimg from '../images/support.png'
import {Spring} from 'react-spring/renderprops';

export const SupportTransition = () => {
    return (
        <div>
            ok
        </div>
        // <Spring
        //     from = {{opacity : 0, marginTop : -500}}
        //     to = {{opacity : 1, marginTop : 0}}
        //     config = {{duration : 3000}}
        // >
        //     {props => (
        //         <div style = {props}>
        //             <div id = 'supportTransition' style = {{height : 300}}>
        //                 <Grid container>
        //                     <Grid
        //                         xs = {12}
        //                         md = {4}
        //                         lg = {4}
        //                         xl = {4}
        //                     >
        //                         <div className = 'transitionElement' style = {{display : 'flex', alignItems : 'flex-end', flexDirection : 'column', backgroundColor : '#733b83'}}>
        //                             <img
        //                                 src = {donaImg} 
        //                                 alt = ''
        //                                 style = {{ height : 75, width : 75}}
        //                             />
        //                             <h3>{dataJson.supportTransition[0].title}</h3>
        //                             <p style = {{textAlign : 'end'}}>{dataJson.supportTransition[0].description}</p>
        //                         </div>
        //                     </Grid>
        //                     <Grid
        //                         xs = {12}
        //                         md = {4}
        //                         lg = {4}
        //                         xl = {4}
        //                     >
        //                         <div className = 'transitionElementM'>
        //                             <img
        //                                 src = {supportimg} 
        //                                 alt = ''
        //                                 style = {{ height : 75, width : 75}}
        //                             />
        //                             <h3 style = {{textAlign : 'center'}}>{dataJson.supportTransition[1].title}</h3>
        //                             <p style = {{textAlign : 'center'}}>{dataJson.supportTransition[1].description}</p>
        //                         </div>
        //                     </Grid>
        //                     <Grid
        //                         xs = {12}
        //                         md = {4}
        //                         lg = {4}
        //                         xl = {4}
        //                     >
        //                         <div className = 'transitionElement'>
        //                             <img
        //                                 src = {voluntImg} 
        //                                 alt = ''
        //                                 style = {{ height : 73, width : 73}}
        //                             />
        //                             <h3>{dataJson.supportTransition[2].title}</h3>
        //                             <p>{dataJson.supportTransition[2].description}</p>
        //                         </div>
        //                     </Grid>
        //                 </Grid>
        //             </div>
        //         </div>
        //     )}
        // </Spring>
    )
}