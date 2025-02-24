import React from 'react';
import './Home.css';
import AnimatedButtonComponent from '../AnimatedButtonComponent/AnimatedButtonComponent';
import Rings from '../Rings/Rings';

const Home: React.FC = () => {


    return (
        <div className="home-container">
            <div className="home-text">
                <h1>You name it,</h1>
                <h1 className="home-pink">we build it</h1>
                <p>Trusted by market leaders</p>
                <div className="home-button">
                    <AnimatedButtonComponent>Start Building</AnimatedButtonComponent>
                </div>
            </div>
            <div className="home-animated-component">
                <Rings />
            </div>
        </div>
    );
};

export default Home;