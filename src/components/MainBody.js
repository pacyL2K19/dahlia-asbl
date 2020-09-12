import React from 'react';
import {
    Grid
} from '@material-ui/core';
import data from '../helpers/data.json';
import oreilleIcon from '../images/ecouteIcon.png';
import okIcon from '../images/okIcon.png';
import feuilleIcon from '../images/feuilleIcon.png';

const MainBody = () => {
    return (
        <div id = 'mainBody' className = 'container'>
            <div id = 'firstContent'>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}
                    >
                        <h3 style = {{textAlign : 'end'}}>
                            Nous travaillons <br />
                            Auprès de tous ceux qui sont<br />
                            Dans le besoin <br />
                        </h3>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}
                    >
                        <p style = {{textAlign : 'start', color : '#5a5a5a'}}>
                            Nous travaillons auprès de tout ceux qui sont dans le besoin : Contribuer à une société́ congolaise dynamique où la femme sera libre, forte, valorisée et apportera du progrès , donner l’accès à l’éducation aux enfants pour leur assurer un avenir meilleur et un regard innovant autour des valeurs du travail.
                        </p>
                    </Grid>
                </Grid>
            </div>
            <div id = 'iconContents'>
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
                                src = {oreilleIcon}
                                alt = ''
                            />
                            <p>
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
                                src = {okIcon}
                                alt = ''
                            />
                            <p>
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
                                src = {feuilleIcon}
                                alt = ''
                            />
                            <p>
                                {data.bodyElements[2].description}
                            </p>
                        </div>
                    </Grid>
                 </Grid>
            </div>
            <div id = 'videoBan'>
                 
            </div>
            <div id = 'lastContent'>

            </div>
        </div>
    )
}

export default MainBody