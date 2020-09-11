import React from 'react';
import {Navbar} from '../components/Navbar'
import MainHeader from '../components/MainHeader'
import {SupportTransition} from '../components/SupportTransition'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div id = 'mainHeader'> 
                <MainHeader />
            </div>
            <SupportTransition />
        </div>
    )
}
