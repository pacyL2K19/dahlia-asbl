import React, { useState } from 'react';
import logo from '../images/logo.png';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home} from '../views/Home';
import About from '../views/About';
import Projects from '../views/Projects';
import Contacts from '../views/Contacts';
import Donate from '../views/Donate';
import Founder from '../views/Founder';
import {HomeE} from '../views/Eng/Home';
import AboutE from '../views/Eng/About';
import ProjectsE from '../views/Eng/Projects';
import ContactsE from '../views/Eng/Contacts';
import DonateE from '../views/Eng/Donate';
import FounderE from '../views/Eng/Founder';
import flagFr from '../images/fr.jpeg';
import flagEn from '../images/engl.jpeg';
import dotenv from 'dotenv';
dotenv.config();

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
                                <a target = '_blank' rel = 'noopeneer noreferrer' href = 'https://web.facebook.com/Dahlia-Asbl-103267777955627/'><i className = 'fa fa-facebook'></i></a>
                            </div>
                            <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <a target = '_blank' rel = 'noopeneer noreferrer' href = 'https://www.instagram.com/dahlia_asbl/'><i className = 'fa fa-instagram'></i></a>
                            </div>
                            {/* <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <a target = '_blank' rel = 'noopeneer noreferrer' href = '#top'><i className = 'fa fa-twitter'></i></a>
                            </div> */}
                            <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <a target = '_blank' rel = 'noopeneer noreferrer' href = 'https://www.youtube.com/channel/UC7wb77U1XgDdIYDMm1nX_jQ'><i className = 'fa fa-youtube'></i></a>
                            </div>
                            <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <Link to = {'/'}><img onClick = {() => setLang('fr')} style={{height : 20, width : 20}} src = {flagFr} alt = '' /></Link> 
                            </div>
                            <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <Link to = {'/en/'}><img onClick = {() => setLang('en')} style={{height : 20, width : 20}} src = {flagEn} alt = '' /></Link> 
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
                                        <Link to = {'/about/'} className = 'nav-link dropdown-toggle page-scroll'>A propos</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/founder/'} className = 'nav-link dropdown-toggle page-scroll'>Fondatrice</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/projects/'} className = 'nav-link page-scroll' >Projets</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/contacts/'} className = 'nav-link page-scroll' >Contacts</Link>
                                    </li>
                                    {/* <li>
                                       <Link to = {'/'}><img onClick = {() => setLang('fr')} style={{height : 30, width : 30, marginTop : -10}} src = {flagFr} alt = '' /></Link> 
                                    </li>
                                    <li>
                                       <Link to = {'/en'}><img onClick = {() => setLang('en')} style={{height : 25, width : 25, marginTop : -10}} src = {flagEn} alt = '' /></Link> 
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path = {process.env.PUBLIC_URL + '/'} component = {Home} />
                        <Route path = {process.env.PUBLIC_URL +'/about/'} component = {About} />
                        <Route path = {process.env.PUBLIC_URL +'/projects/'} component = {Projects} />
                        <Route path = {process.env.PUBLIC_URL +'/contacts/'} component = {Contacts} />
                        <Route path = {process.env.PUBLIC_URL +'/donate/'} component = {Donate}/>
                        <Route path = {process.env.PUBLIC_URL +'/founder/'} component = {Founder} />
                        <Route path = {process.env.PUBLIC_URL +'/en/'} component = {HomeE} />
                        <Route path = {process.env.PUBLIC_URL +'/abouten/'} component = {AboutE} />
                        <Route path = {process.env.PUBLIC_URL +'/projectse/'} component = {ProjectsE} />
                        <Route path = {process.env.PUBLIC_URL +'/contactsen/'} component = {ContactsE} />
                        <Route path = {process.env.PUBLIC_URL +'/donateen/'} component = {DonateE}/>
                        <Route path = {process.env.PUBLIC_URL +'/founderen/'} component = {FounderE} />
                        <Route component = {Home} />
                        {/* <Route path = {process.env.PUBLIC_URL +'/*'} component = {Home}/> */}
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
                                <a target = '_blank' rel = 'noopeneer noreferrer' href = 'https://web.facebook.com/Dahlia-Asbl-103267777955627/'><i className = 'fa fa-facebook'></i></a>
                            </div>
                            <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <a target = '_blank' rel = 'noopeneer noreferrer' href = 'https://www.instagram.com/dahlia_asbl/'><i className = 'fa fa-instagram'></i></a>
                            </div>
                            {/* <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <a target = '_blank' rel = 'noopeneer noreferrer' href = '#top'><i className = 'fa fa-twitter'></i></a>
                            </div> */}
                            <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <a target = '_blank' rel = 'noopeneer noreferrer' href = 'https://www.youtube.com/channel/UC7wb77U1XgDdIYDMm1nX_jQ'><i className = 'fa fa-youtube'></i></a>
                            </div>
                            <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <Link to = {'/'}><img onClick = {() => setLang('fr')} style={{height : 20, width : 20}} src = {flagFr} alt = '' /></Link> 
                            </div>
                            <div style = {{ alignSelf : "center", alignContent : 'center', marginTop : 10, padding : 20}}>
                                <Link to = {'/en/'}><img onClick = {() => setLang('en')} style={{height : 20, width : 20}} src = {flagEn} alt = '' /></Link> 
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
                                        <Link to = {'/en/'} className = 'nav-link page-scroll' >Home</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/abouten/'} className = 'nav-link dropdown-toggle page-scroll'>About</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/founderen/'} className = 'nav-link dropdown-toggle page-scroll'>Founder</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/projectsen/'} className = 'nav-link page-scroll' >Projects</Link>
                                    </li>
                                    <li>
                                        <Link to = {'/contactsen/'} className = 'nav-link page-scroll' >Contacts</Link>
                                    </li>
                                    {/* <li>
                                       <Link to = {'/'}><img onClick = {() => setLang('fr')} style={{height : 30, width : 30, marginTop : -10}} src = {flagFr} alt = '' /></Link> 
                                    </li>
                                    <li>
                                       <Link to = {'/en'}><img onClick = {() => setLang('en')} style={{height : 25, width : 25, marginTop : -10}} src = {flagEn} alt = '' /></Link> 
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path = {process.env.PUBLIC_URL + '/'} component = {Home} />
                        <Route path = {process.env.PUBLIC_URL +'/about'} component = {About} />
                        <Route path = {process.env.PUBLIC_URL +'/projects'} component = {Projects} />
                        <Route path = {process.env.PUBLIC_URL +'/contacts'} component = {Contacts} />
                        <Route path = {process.env.PUBLIC_URL +'/donate'} component = {Donate}/>
                        <Route path = {process.env.PUBLIC_URL +'/founder'} component = {Founder} />
                        <Route path = {process.env.PUBLIC_URL +'/en/'} component = {HomeE} />
                        <Route path = {process.env.PUBLIC_URL +'/abouten/'} component = {AboutE} />
                        <Route path = {process.env.PUBLIC_URL +'/projectsen/'} component = {ProjectsE} />
                        <Route path = {process.env.PUBLIC_URL +'/contactsen/'} component = {ContactsE} />
                        <Route path = {process.env.PUBLIC_URL +'/donateen/'} component = {DonateE}/>
                        <Route path = {process.env.PUBLIC_URL +'/founderen/'} component = {FounderE} />
                        <Route component = {Home} />
                        {/* <Route path = {process.env.PUBLIC_URL +'/*'} component = {Home}/> */}
                    </Switch>
                </div>
                </Router>
            }
        </div>
        
    )
}