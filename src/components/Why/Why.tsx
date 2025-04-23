import React, { useEffect, useRef, useState } from 'react';
import './Why.css';
import SpinningICP from '../Elements/SpinningICP/SpinningICP';
import RainbowCircle from '../Elements/RainbowCircle/RainbowCircle';
import RicardoButtonImage from '/assets/ICPeople/RicardoButtonImage.webp'
import SagarButtonImage from '/assets/ICPeople/SagarButtonImage.webp'
import XIcon from '/assets/SocialMediaIcons/XIcon.svg'
import LinkedInIcon from '/assets/SocialMediaIcons/LinkedInLogo.svg'
import GithubIcon from '/assets/SocialMediaIcons/GithubIcon.svg'

import VibrantLogo from '/assets/projectLogos/VibrantLogo.webp';
import KonectaLogo from '/assets/projectLogos/KonectaLogo.svg';
import ICPCCLogo from '/assets/projectLogos/ICPCCLogo.webp';
import BOOMLogo from '/assets/projectLogos/BOOMLogo.webp';
import DOGMILogo from '/assets/projectLogos/DOGMILogo.webp';
import PartnrshipLogo from '/assets/projectLogos/PartnrshipLogo.svg';
import ExpandableDivs, { ReceivedCellData } from '../Elements/ExpansableDivs/ExpandableDivs';

const cells: [
    ReceivedCellData,
    ReceivedCellData,
    ReceivedCellData,
    ReceivedCellData,
    ReceivedCellData,
    ReceivedCellData
] = [
        {
            title: "DOGMI",
            description:
                "Woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof",
            image: DOGMILogo,
        },
        {
            title: "BOOM DAO",
            description:
                "The help you provided to Elementum minigames have truly united the community. Now, with DIGGY fueling even more games and promotions, we're excited to see what's next!",
            image: BOOMLogo,
        },
        {
            title: "Konecta",
            description:
                "After one year, the project remains unfinished. Excuses like “we’re building a more ambitious app” don’t cut it, and rebellious Kami is out of control—though the rest was fine.",
            image: KonectaLogo,
        },
        {
            title: "Vibrant",
            description:
                "Che, la expo fue una masa total, boludo! Los NFT estuvieron re piola y con garra! Seguí haciendo tremendo laburo, y te aseguro que la próxima armamos un quilombo que ni te imaginás.",
            image: VibrantLogo,
        },
        {
            title: "Partnrship",
            description:
                "They compressed two months' work into one—a remarkable feat showcasing their relentless drive. Plus, they added bonus features that improved quality and saved future work.",
            image: PartnrshipLogo,
        },
        {
            title: "ICPCC",
            description:
                "That guy with the Z pulled a Houdini on the cash, but aside from his disappearing act, awesome job. Don't miss the airdrop next year!",
            image: ICPCCLogo,
        },
    ];

const Why: React.FC = () => {

    const [ricardoRevealed, setRicardoRevealed] = useState(false);
    const [sagarRevealed, setSagarRevealed] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setRicardoRevealed(true);
                        setSagarRevealed(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleMiddleCircleClick = () => {
        if (!ricardoRevealed && !sagarRevealed) return;
        setFadeOut(true);
        setTimeout(() => {
            setRicardoRevealed(false);
            setSagarRevealed(false);
            setFadeOut(false);
        }, 1500);
    };

    return (
        <div className="why-container">
            <div className="why-text">
                <h1>WHY</h1>
                <div className="why-bg-wrapper">
                    <svg
                        className="background-svg"
                        width="889"
                        height="322"
                        viewBox="0 0 889 322"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M889 322C889 279.714 877.503 237.843 855.164 198.776C832.826 159.709 800.085 124.212 758.809 94.3116C717.533 64.4111 668.532 40.6928 614.603 24.5108C560.674 8.32877 502.873 -1.84836e-06 444.5 0C386.127 1.84836e-06 328.326 8.32878 274.397 24.5108C220.468 40.6928 171.467 64.4112 130.191 94.3116C88.9154 124.212 56.1737 159.709 33.8355 198.776C11.4973 237.843 -5.10309e-06 279.714 0 322L444.5 322H889Z"
                            fill="url(#paint0_linear_2126_909)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_2126_909"
                                x1="0"
                                y1="322"
                                x2="889"
                                y2="322"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#E14E87" />
                                <stop offset="0.5" stopColor="#E8B125" />
                                <stop offset="1" stopColor="#2BC9EC" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p>
                        We are passionate about the Internet Computer Protocol and believe in
                        the power of decentralization. Our mission is to drive project growth
                        through innovative web3 solutions.
                    </p>
                </div>
                <div className="why-circle">
                    <SpinningICP />
                </div>
                <div className={`why-panas ${fadeOut ? 'fade-out' : ''}`} ref={containerRef}>
                    <div className={`ricardo-group ${ricardoRevealed ? 'revealed' : ''}`}>
                        <div className="ricardo-buttons">
                            <div
                                className="buttonpana"
                                style={{ backgroundImage: `url(${RicardoButtonImage})` }}
                                onMouseEnter={() => {
                                    if (!fadeOut) setRicardoRevealed(true);
                                }}
                            />
                            <a href="https://x.com/capuzr" target="_blank" rel="noopener noreferrer">
                                <div className="buttonpana subpana subpana11">
                                    <span className="icon">
                                        <img src={XIcon} alt="X Icon" />
                                    </span>
                                    <span className="text">@capuzr</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/ricardo-capuz-b384b964/" target="_blank" rel="noopener noreferrer">
                                <div className="buttonpana subpana subpana12">
                                    <span className="icon-left">
                                        <img src={LinkedInIcon} alt="LinkedIn Icon" />
                                    </span>
                                </div>
                            </a>
                            <a href="https://github.com/capuzr" target="_blank" rel="noopener noreferrer">
                                <div className="buttonpana subpana subpana13">
                                    <span className="icon-left">
                                        <img src={GithubIcon} alt="Github Icon" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <p className="ricardo-text">AI & Blockchain dev and advisor</p>
                    </div>

                    <div className="panas-middle-circle" onClick={handleMiddleCircleClick}>
                        <RainbowCircle />
                    </div>

                    <div className={`sagar-group ${sagarRevealed ? 'revealed' : ''}`}>
                        <div className="sagar-buttons">
                            <div className="buttonpana subpana subpana23">
                                <span className="icon-left">
                                    <img src={GithubIcon} alt="Github Icon" />
                                </span>
                            </div>
                            <div className="buttonpana subpana subpana22">
                                <span className="icon-left">
                                    <img src={LinkedInIcon} alt="LinkedIn Icon" />
                                </span>
                            </div>
                            <div className="buttonpana subpana subpana21">
                                <span className="icon">
                                    <img src={XIcon} alt="X Icon" />
                                </span>
                                <span className="text">@sagar</span>
                            </div>
                            <div
                                className="buttonpana"
                                style={{ backgroundImage: `url(${SagarButtonImage})` }}
                                onMouseEnter={() => {
                                    if (!fadeOut) setSagarRevealed(true);
                                }}
                            />
                        </div>
                        <p className="sagar-text">AI & Blockchain dev and advisor</p>
                    </div>
                </div>
            </div>
            <ExpandableDivs cells={cells} />
        </div>
    );
};

export default Why;