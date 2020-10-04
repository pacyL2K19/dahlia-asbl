import React, { useState } from 'react';
import logo from '../images/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home} from '../views/Home';
import About from '../views/About';
import Vision from '../views/Vision';
import Contacts from '../views/Contacts';
import Donate from '../views/Donate';
import Founder from '../views/Founder';
import {HomeE} from '../views/Eng/Home';
import AboutE from '../views/Eng/About';
import VisionE from '../views/Eng/Vision';
import ContactsE from '../views/Eng/Contacts';
import DonateE from '../views/Eng/Donate';
import FounderE from '../views/Eng/Founder';
import flagFr from '../images/fr.jpeg';
import flagEn from '../images/engl.jpeg';

export const Navbar = () => {
    const [showing, setShowing] = useState (false);
    const [lang, setLang] = useState('fr');
    const handleCliclk = () => {
        showing ? setShowing(false) : setShowing(false)
    }
    return (
        
        <div>
            {
                lang === 'fr' ? 
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
                                <a href = 'https://www.youtube.com/channel/UC7wb77U1XgDdIYDMm1nX_jQ'><i className = 'fa fa-youtube'></i></a>
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
                                <a href = '#top' className = 'navbar-brand page-scroll'>
                                    <img src = {logo} alt = '' style = {{ height : 90, width : 90, backgroundColor : '#ffffff', borderRadius : 45, marginTop : -25}} />
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
                                        <Link to = {'/about'} className = 'nav-link dropdown-toggle page-scroll'>A propos</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/founder'} className = 'nav-link dropdown-toggle page-scroll'>Fondatrice</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/vision'} className = 'nav-link page-scroll' >Vision</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/contacts'} className = 'nav-link page-scroll' >Contacts</Link>
                                    </li>
                                    <li>
                                       <Link to = {'/'}><img onClick = {() => setLang('fr')} style={{height : 30, width : 30, marginTop : -10}} src = {flagFr} alt = '' /></Link> 
                                    </li>
                                    <li>
                                       <Link to = {'/en'}><img onClick = {() => setLang('en')} style={{height : 25, width : 25, marginTop : -10}} src = {flagEn} alt = '' /></Link> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path = '/' component = {Home} />
                        <Route exact path = '/about' component = {About} />
                        <Route exact path = '/vision' component = {Vision} />
                        <Route exact path = '/contacts' component = {Contacts} />
                        <Route exact path = '/donate' component = {Donate}/>
                        <Route exact path = '/founder' component = {Founder} />
                        <Route exact path = '/en' component = {HomeE} />
                        <Route exact path = '/en/about' component = {AboutE} />
                        <Route excat path = '/en/vision' component = {VisionE} />
                        <Route exact path = '/en/contacts' component = {ContactsE} />
                        <Route exact path = '/en/donate' component = {DonateE}/>
                        <Route exact path = '/en/founder' component = {FounderE} />
                        <Route path = '/*' component = {Home}/>
                    </Switch>
                </div>
                </Router>
                :
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
                                <i className = 'fa fa-clock-o'></i>   <span>Mon-Fri 9:00am - 04:00pm</span>
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
                                <a href = 'https://www.youtube.com/channel/UC7wb77U1XgDdIYDMm1nX_jQ'><i className = 'fa fa-youtube'></i></a>
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
                                <a href = '#top' className = 'navbar-brand page-scroll'>
                                    <img src = {logo} alt = '' style = {{ height : 90, width : 90, backgroundColor : '#ffffff', borderRadius : 45, marginTop : -25}} />
                                </a>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="bs-example-navbar-collapse-1"
                            >
                                <ul className = 'nav navbar-nav navbar-right'>
                                    <li>
                                        <Link to = {'/en'} className = 'nav-link page-scroll' >Home</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/en/about'} className = 'nav-link dropdown-toggle page-scroll'>About</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/en/founder'} className = 'nav-link dropdown-toggle page-scroll'>Founder</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/en/vision'} className = 'nav-link page-scroll' >Vision</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/en/contacts'} className = 'nav-link page-scroll' >Contacts</Link>
                                    </li>
                                    <li>
                                       <Link to = {'/'}><img onClick = {() => setLang('fr')} style={{height : 30, width : 30, marginTop : -10}} src = {flagFr} alt = '' /></Link> 
                                    </li>
                                    <li>
                                       <Link to = {'/en'}><img onClick = {() => setLang('en')} style={{height : 25, width : 25, marginTop : -10}} src = {flagEn} alt = '' /></Link> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                    <Route exact path = '/' component = {Home} />
                        <Route exact path = '/about' component = {About} />
                        <Route exact path = '/vision' component = {Vision} />
                        <Route exact path = '/contacts' component = {Contacts} />
                        <Route exact path = '/donate' component = {Donate}/>
                        <Route exact path = '/founder' component = {Founder} />
                        <Route exact path = '/en' component = {HomeE} />
                        <Route exact path = '/en/about' component = {AboutE} />
                        <Route exact path = '/en/vision' component = {VisionE} />
                        <Route exact path = '/en/contacts' component = {ContactsE} />
                        <Route exact path = '/en/donate' component = {DonateE}/>
                        <Route exact path = '/en/founder' component = {FounderE} />
                        <Route path = '/*' component = {Home}/>
                    </Switch>
                </div>
                </Router>
            }
        </div>
        
    )
}