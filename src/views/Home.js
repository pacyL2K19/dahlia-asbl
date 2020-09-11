import React from 'react';
import {Navbar} from '../components/Navbar'
import MainHeader from '../components/MainHeader'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div id = 'mainHeader'> 
                <MainHeader />
            </div>
        </div>
    )
}
