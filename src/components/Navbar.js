import React, { useState } from 'react';
import logo from '../images/logo.png'
import { css } from 'emotion'
// import {
//     makeStyles
// } from '@material-ui/core'

// const useStyles = makeStyles (() => ({
//     logo : {
//         height : 80,
//         width : 80
//     },
//     spans : {
//         fontSize : 10,
//     }
// }))

export const Navbar = () => {
    const classes = css`
        span:hover {
            color : '#ffffff';
        }
        .fa {
            color : '#fff
        }
    `
    const styles = {
        spans : {
            fontSize : 12
        }
    }
    const [showing, setShowing] = useState (false)
    const handleCliclk = () => {
        showing ? setShowing(false) : setShowing(false)
    }
    return (
        <div id = 'navSection' className = {classes}>
            <section  style = {{ backgroundColor : '#efefef', display : 'flex', flexDirection : 'row', height : 50, justifyContent : 'space-between'}}>
                <div style = {{ height : 50,  display : 'flex', flexDirection : 'row' }} >
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <i className = 'fa fa-phone'></i>  <span style = {styles.spans}>+243 819 740 723 </span>
                    </div>
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <i className = 'fa fa-envelope-o'></i>  <span style = {styles.spans}>info@dahlia-asbl.org</span>
                    </div>
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <i className = 'fa fa-clock-o'></i>   <span style = {styles.spans}>Lun-Ven 9:00 - 16:00</span>
                    </div>
                </div>
                <div style = {{ height : 50,  display : 'flex', flexDirection : 'row' }}>
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <a href = '#top'><i className = 'fa fa-facebook'></i></a>
                    </div>
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <a href = '#top'><i className = 'fa fa-instagram'></i></a>
                    </div>
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <a href = '#top'><i className = 'fa fa-twitter'></i></a>
                    </div>
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <a href = '#top'><i className = 'fa fa-google-plus'></i></a>
                    </div>
                </div>
            </section>
            <nav id='menu' className = 'navbar navbar-default navbar-sticky-top'>
                <div className = 'container'>
                    <div className = 'navbar-header'>
                        {
                            !showing ? (
                                <button
                                    onClick = {handleCliclk}
                                    type = 'button'
                                    className = 'navbar-toggle collapsed'
                                    data-toggle = 'collapse'
                                    data-target = '#bs-example-navbar-collapse-1'
                                >
                                    {" "}
                                    <span className="sr-only">Toggle navigation</span>{" "}
                                    <span className="icon-bar"></span>{" "}
                                    <span className="icon-bar"></span>{" "}
                                    <span className="icon-bar"></span>{" "}
                                </button>
                            ) : (
                                <button
                                    type = 'button'
                                    onClick = {handleCliclk}
                                    className = 'navbar-toggle collapsed'
                                    data-toggle = 'collapse'
                                    data-target = '#bs-example-navbar-collapse-1'
                                >
                                    
                                </button>
                            )
                        }
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
        </div>
    )
}