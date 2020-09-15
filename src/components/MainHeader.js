import React from 'react';
import {Donate} from './Donate';
import {
    Grid
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Typical from 'react-typical'

const MainHeader = () => {
    return (
        <div style = {{ display : 'flex', flexDirection : 'row'}} className = 'container' id = 'mainHeader'>
            <Grid 
                container
            >
                <Grid
                    item
                    className = 'branch1'
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
                        <Typical 
                            steps={[' Apporter de l’aide et de l’espoir aux enfants', 1000, '   ', 100]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </p>
                    <button
                        type = 'button'
                        className = 'donateBtn'
                        onClick = {() => console.log('Ok')}
                    >
                        <Link to = '/donate' className = 'donBtns'>Donner maintenant</Link>
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