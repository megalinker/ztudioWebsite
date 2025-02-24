import React from 'react';
import './AnimatedButtonComponent.css';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const AnimatedButtonComponent: React.FC<AnimatedButtonProps> = ({ children, ...props }) => {
    return (
        <div className="animated-button-container">
            <button className="animated-button" {...props}>
                {children}
            </button>
        </div>
    );
};

export default AnimatedButtonComponent;
