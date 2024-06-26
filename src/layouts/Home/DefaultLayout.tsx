import React from 'react';
import TopHeader from '../../components/Header/TopHeader';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Slider/Banner';
import Footer from '../../components/Footer/Footer';


function DefaultLayout() {
    
    return (
        <div>
            <TopHeader />
            <Header />
            <Navbar />
            <Banner />
            <div className="wrapper">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
