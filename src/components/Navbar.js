import React from 'react';
import logo from '../images/logo.png'
// import {
//     makeStyles
// } from '@material-ui/core'

// const useStyles = makeStyles (() => ({
//     logo : {
//         height : 80,
//         width : 80
//     }
// }))

export const Navbar = () => {
    // const classes = useStyles ()
    return (
        <nav id='menu' className = 'navbar navbar-default navbar-fixed-top'>
            <div className = 'container'>
                <div className = 'navbar-header'>
                    <button
                        type = 'button'
                        className = 'navba-toggle collapsed'
                        data-toggle = 'collapse'
                        data-target = '#bs-example-navbar-collapse-1'
                    >
                        {" "}
                        <span className="sr-only">Toggle navigation</span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                    </button>
                    <a href = '#menu' className = 'navbar-brand page-scroll'>
                        <img src = {logo} alt = '' style = {{ height : 90, width : 90, backgroundColor : '#ffffff'}} />
                    </a>
                </div>
                <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                >
                    <ul className = 'nav navbar-nav navbar-right'>
                        <li>
                            <a href = '#top' className = 'page-scroll'>
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href = '#top' className = 'page-scroll'>
                                A propos
                            </a>
                        </li>
                        <li>
                            <a href = '#top' className = 'page-scroll'>
                                Vision
                            </a>
                        </li>
                        <li>
                            <a href = '#top' className = 'page-scroll'> 
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// const styles