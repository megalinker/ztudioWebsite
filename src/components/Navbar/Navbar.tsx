import React, { useState } from 'react';
import './Navbar.css';
import { useMediaQuery } from 'react-responsive';
import ZtudioLogo from '/assets/ztudioLogo.svg';
import BrightnessIcon from '/assets/brightnessIcon.svg';

import FlipMove from 'react-flip-move';

import HomeIcon from '/assets/homeIcon.svg';
import WhyIcon from '/assets/whyIcon.svg';
import ServicesIcon from '/assets/servicesIcon.svg';
import ProjectsIcon from '/assets/projectsIcon.svg';
import ContactIcon from '/assets/contactIcon.svg';

interface MenuItem {
    key: string;
    label: string;
    icon: string;
}

interface NavbarProps {
    scrollToSection?: (section: string) => void;
    openMenu?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, openMenu }) => {
    // Hamburger on screens below 1000px:
    const isMobile = useMediaQuery({ query: '(max-width: 850px)' });

    const defaultMenu: MenuItem[] = [
        { key: 'home', label: 'Home', icon: HomeIcon },
        { key: 'why', label: 'Why?', icon: WhyIcon },
        { key: 'services', label: 'Services', icon: ServicesIcon },
        { key: 'projects', label: 'Projects', icon: ProjectsIcon },
        { key: 'contact', label: 'Contact', icon: ContactIcon },
    ];

    const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultMenu);
    const [activeSection, setActiveSection] = useState('home');

    const handleButtonClick = (key: string) => {
        if (key !== activeSection) {
            const index = menuItems.findIndex(item => item.key === key);
            if (index > 0) {
                const newOrder = [
                    ...menuItems.slice(index),
                    ...menuItems.slice(0, index)
                ];
                setMenuItems(newOrder);
            }
            setActiveSection(key);
            if (scrollToSection) {
                scrollToSection(key);
            }
        }
    };

    // const path1 = 'M500,49.5 L1273,49.5';
    // const path2 = 'M2044,49.5 L1273,49.5';

    return (
        <nav className={`navbar`}>
            <div className="navbar-container">
                {/* Left: Logo */}
                <div className="navbar-left">
                    <img
                        src={ZtudioLogo}
                        alt="Konecta Logo"
                        style={{ height: '30px', width: 'auto' }}
                    />
                </div>

                {/* Center: Menu items */}
                {!isMobile && (
                    <div className="navbar-center">
                        <div className="navbar-text-background">
                            <FlipMove typeName="div" className="navbar-buttons-container">
                                {menuItems.map(item => (
                                    <button
                                        key={item.key}
                                        className={`navbar-button ${activeSection === item.key ? 'active' : ''}`}
                                        onClick={() => handleButtonClick(item.key)}
                                    >
                                        <img src={item.icon} alt={`${item.label} Icon`} className="navbar-icon" />
                                        {item.label}
                                    </button>
                                ))}
                            </FlipMove>
                        </div>
                    </div>
                )}

                {/* Right: Brightness icon */}
                {!isMobile && (
                    <div className="navbar-right">
                        <img
                            src={BrightnessIcon}
                            alt="Brightness Icon"
                            className="navbar-brightness-icon"
                        />
                    </div>
                )}

                {/* Right: Hamburger menu (show only if mobile) */}
                {isMobile && (
                    <button
                        className="navbar-menu-button"
                        onClick={() => openMenu && openMenu()}
                        aria-label="Open Menu"
                    >
                        <svg width="30" height="30" viewBox="0 0 100 80" fill="white">
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect>
                            <rect y="60" width="100" height="10"></rect>
                        </svg>
                    </button>
                )}

                {/* SVG Lines */}

                <div className="navbar-svg-container">
                    <svg
                        className="navbar-svg"
                        width="100%"
                        height="50"
                        viewBox="0 0 2544 50"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient
                                id="strokeGradient"
                                gradientUnits="userSpaceOnUse"
                                x1="1272"
                                y1="0"
                                x2="500"
                                y2="0"
                            >
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                            </linearGradient>

                            <linearGradient
                                id="strokeGradient2"
                                gradientUnits="userSpaceOnUse"
                                x1="1272"
                                y1="0"
                                x2="2044"
                                y2="0"
                            >
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* 
                        <path
                            className="shape"
                            d={path1}
                            stroke="url(#strokeGradient)"
                            strokeWidth="1"
                            fill="none"
                        />
                        <path
                            className="shape"
                            d={path2}
                            stroke="url(#strokeGradient2)"
                            strokeWidth="1"
                            fill="none"
                        />
                        */}
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
