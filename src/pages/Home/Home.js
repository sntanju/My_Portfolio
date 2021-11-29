import React from 'react';
import About from './About/About';
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
        </div>
    );
};

export default Home;