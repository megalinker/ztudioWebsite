import React from 'react';
import './Why.css';
import SpinningICP from '../Elements/SpinningICP/SpinningICP';

const Why: React.FC = () => {


    return (
        <div className="why-container">
            <div className="why-text">
                <h1>WHY</h1>
                <p>We are passionate about the Internet Computer Protocol and believe in the power of decentralization. Our mission is to drive project growth through innovative web3 solutions.</p>
                <div className="why-circle">
                    <SpinningICP />
                </div>
            </div>
        </div>
    );
};

export default Why;