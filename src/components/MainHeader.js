import React from 'react';
import {Donate} from './Donate';
import {
    Grid
} from '@material-ui/core'

const MainHeader = () => {
    return (
        <div id = 'mainHeader' style = {{ display : 'flex', flexDirection : 'row'}} className = 'container'>
            <Grid container>
                <Grid
                    item
                    xs = {12}
                    xl = {8}
                    lg = {8}
                    md = {8}
                >
                    <p>Ensemble, faisons plus</p><br/>
                    <h2>
                        Bienvenue chez Dahlia Asbl.
                        L'asbl qui donne à chaque
                        femme et enfant les chances
                        de réussir leur avenir.
                    </h2><br />
                    <p>
                        Apporter de l’aide et de l’espoir aux enfants
                    </p>
                    <button
                        type = 'button'
                        className = 'donateBtn'
                        onClick = {() => console.log('Ok')}
                    >
                        Donate Now
                    </button>
                </Grid>
                <Grid
                    item 
                    xs = {12}
                    lg = {4}
                    xl = {4}
                    md = {4}
                >
                    <Donate />
                </Grid>
            </Grid>
        </div>
    )
}

export default MainHeader