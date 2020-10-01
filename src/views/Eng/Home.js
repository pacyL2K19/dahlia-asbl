import React from 'react';
// import {Navbar} from '../components/Navbar';
import MainHeader from '../../components/Eng/MainHeader';
import {SupportTransition} from '../../components/Eng/SupportTransition';
import MainBody from '../../components/Eng/MainBody';
import PreFooter from '../../components/Eng/PreFooter';
import Footer from '../../components/Eng/Footer';

export const HomeE = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div style={{backgroundImage : 'url('+ require('../../images/bgHome1.jpg') +')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', marginTop : -20 }}> 
                <MainHeader />
            </div>
            <div>
                <SupportTransition />
            </div>
            <MainBody />
            <PreFooter />
            <Footer />
        </div>
    )
}
