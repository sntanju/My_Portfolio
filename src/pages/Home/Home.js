import React from 'react';
import About from './About/About';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import MySkils from './MySkils/MySkils';
import Navigation from './Navigation/Navigation';
import Projects from './Projects/Projects';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <About></About>
            <Projects></Projects>
            <MySkils></MySkils>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;