import React from 'react';
import {Navbar} from '../components/Navbar'
import MainHeader from '../components/MainHeader'
import {SupportTransition} from '../components/SupportTransition'
import MainBody from '../components/MainBody'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div style={{backgroundImage : 'url('+ require('../images/bgHome1.jpg') +')', backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', marginTop : -20 }}> 
                <MainHeader />
            </div>
            <SupportTransition />
            <MainBody />
        </div>
    )
}
