import React, { useState } from 'react';
import logo from '../images/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home} from '../views/Home';
import About from '../views/About';
import Vision from '../views/Vision';
import Contacts from '../views/Contacts'

export const Navbar = () => {
    const [showing, setShowing] = useState (false)
    const handleCliclk = () => {
        showing ? setShowing(false) : setShowing(false)
    }
    return (
        <Router>
        <div id = 'navSection' className = 'sticky-top'>
            <section  style = {{ backgroundColor : '#efefef', display : 'flex', flexDirection : 'row', height : 50, justifyContent : 'space-between'}}>
                <div className = 'contactsN' style = {{ height : 50,  display : 'flex', flexDirection : 'row' }} >
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <i className = 'fa fa-phone'></i>  <span>+243 819 740 723 </span>
                    </div>
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <i className = 'fa fa-envelope-o'></i>  <span>info@dahlia-asbl.org</span>
                    </div>
                    <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                        <i className = 'fa fa-clock-o'></i>   <span>Lun-Ven 9:00 - 16:00</span>
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
            <nav id='menu' className = 'navbar navbar-expand-lg sticky-top navbar-default' data-spy="affix" data-offset-top="197">
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
                            <li>
                                <Link to = {'/contacts'} className = 'nav-link page-scroll' >Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route path = '/about' component = {About} />
                <Route path = '/vision' component = {Vision} />
                <Route path = '/contacts' component = {Contacts} />
            </Switch>
        </div>
        </Router>
    )
}