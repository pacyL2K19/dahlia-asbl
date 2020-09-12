import React from 'react';
import {
    Grid
} from '@material-ui/core'

const MainBody = () => {
    return (
        <div id = 'mainBody'>
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
                        className = 'itemIconContent'
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >

                    </Grid>
                    <Grid
                        item
                        className = 'itemIconContent'
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >

                    </Grid>
                    <Grid
                        item
                        className = 'itemIconContent'
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >

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