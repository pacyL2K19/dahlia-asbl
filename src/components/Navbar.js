import React, { useState } from 'react';
import logo from '../images/logo.png';
import { css } from 'emotion';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home} from '../views/Home';
import About from '../views/About';
import Vision from '../views/Vision';

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
        <Router>
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
            <nav id='menu' className = 'navbar sticky-top navbar-default'>
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
                            <img src = {logo} alt = '' style = {{ height : 90, width : 90, backgroundColor : '#ffffff', borderRadius : 45}} />
                        </a>
                    </div>
                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className = 'nav navbar-nav navbar-right'>
                            <li>
                                <Link to = {'/'} className = 'nav-link page-scroll' >Accueil</Link>
                            </li>
                            <li>
                                <Link to = {'/about'} className = 'nav-link page-scroll' >A propos</Link>
                            </li>
                            <li>
                                <Link to = {'/vision'} className = 'nav-link page-scroll' >Vision</Link>
                            </li>
                            {/* <li>
                                <Link to = {'/'} className = 'nav-link page-scroll' >Accueil</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route exact path = '/about' component = {About} />
                <Route exact path = '/vision' component = {Vision} />
            </Switch>
        </div>
        </Router>
    )
}