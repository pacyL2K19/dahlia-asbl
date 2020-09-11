import React from 'react';
import dataJson from '../helpers/data.json';
import {
    Grid
} from '@material-ui/core';
import donaImg from '../images/Donation.png';
import voluntImg from '../images/Volunteer.png';
import supportimg from '../images/Support 1.png'

export const SupportTransition = () => {
    return (
        <div id = 'supportTransition' style = {{height : 300}}>
            <Grid container>
                <Grid
                    xs = {12}
                    md = {4}
                    lg = {4}
                    xl = {4}
                >
                    <div className = 'transitionElement'>
                        <img
                            src = {donaImg} 
                            alt = ''
                            style = {{ height : 50, width : 50}}
                        />
                        <h3>{dataJson.supportTransition[0].title}</h3>
                        <p>{dataJson.supportTransition[0].description}</p>
                    </div>
                </Grid>
                <Grid
                    xs = {12}
                    md = {4}
                    lg = {4}
                    xl = {4}
                >
                    <div className = 'transitionElementM'>
                        <img
                            src = {supportimg} 
                            alt = ''
                            style = {{ height : 50, width : 50, borderRadius : 25, backgroundColor : '#21082e'}}
                        />
                        <h3>{dataJson.supportTransition[1].title}</h3>
                        <p>{dataJson.supportTransition[1].description}</p>
                    </div>
                </Grid>
                <Grid
                    xs = {12}
                    md = {4}
                    lg = {4}
                    xl = {4}
                >
                    <div className = 'transitionElement'>
                        <img
                            src = {voluntImg} 
                            alt = ''
                            style = {{ height : 50, width : 50}}
                        />
                        <h3>{dataJson.supportTransition[2].title}</h3>
                        <p>{dataJson.supportTransition[2].description}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}