import React from 'react';
import ZtudioLogoBlack from '/assets/ztudioLogoBlack.svg';
import { useMediaQuery } from 'react-responsive';
import AnimatedButtonComponent from '../Elements/AnimatedButtonComponent/AnimatedButtonComponent';
import XIconB from '/assets/SocialMediaIcons/XIconB.svg'
import EmailIconCB from '/assets/SocialMediaIcons/EmailIconCB.svg'
import TelegramIconB from '/assets/SocialMediaIcons/TelegramIconB.svg'

const Footer: React.FC = () => {

    const isKindOfMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                marginLeft: 'calc(50% - 50vw)',
            }}
        >
            <style>{`
                @keyframes line1Animation {
                    0% { opacity: 0; }
                    20% { opacity: 1; }
                    60% { opacity: 1; }
                    80% { opacity: 0; }
                    100% { opacity: 0; }
                }
                @keyframes line2Animation {
                    0% { opacity: 0; }
                    20% { opacity: 0; }
                    40% { opacity: 1; }
                    60% { opacity: 1; }
                    80% { opacity: 0; }
                    100% { opacity: 0; }
                }
                @keyframes line3Animation {
                    0% { opacity: 0; }
                    40% { opacity: 0; }
                    60% { opacity: 1; }
                    80% { opacity: 0; }
                    100% { opacity: 0; }
                }
                /* Apply the animations to the respective SVG paths with a 5s duration */
                #Line1 {
                    animation: line1Animation 5s linear infinite;
                }
                #Line2 {
                    animation: line2Animation 5s linear infinite;
                }
                #Line3 {
                    animation: line3Animation 5s linear infinite;
                }
            `}</style>

            <div
                style={{
                    width: '112vw',
                    marginLeft: '-6vw',
                }}
            >
                <svg
                    id="Footerzt"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1949 510"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        <linearGradient
                            id="Degradado_sin_nombreF"
                            data-name="Degradado sin nombre"
                            x1={112}
                            y1={41.5}
                            x2={1840}
                            y2={41.5}
                            gradientTransform="translate(0 396) scale(1 -1)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#e14e87" />
                            <stop offset={0.5} stopColor="#e8b125" />
                            <stop offset={1} stopColor="#2bc9ec" />
                        </linearGradient>
                    </defs>
                    <path
                        id="ArcoirisBase"
                        d="M112,569c0-236.93,192.07-429,429-429h870c236.93,0,429,192.07,429,429H112Z"
                        fill="url(#Degradado_sin_nombreF)"
                        strokeWidth={0}
                        style={{ filter: "blur(100px)" }}
                    />
                    <path
                        id="WhiteTransparency"
                        d="M541,114.5h870c236.49,0,428.23,191.58,428.5,428H112.5c.27-236.42,192.01-428,428.5-428Z"
                        fill="rgba(255, 255, 255, .5)"
                        stroke="#fff"
                    />
                    <path
                        id="Line1"
                        d="M544,77h861c261.45,0,473.46,211.68,474,473H70c.54-261.32,212.55-473,474-473Z"
                        fill="none"
                        stroke="#fff"
                        strokeWidth={2}
                    />
                    <path
                        id="Line2"
                        d="M528,39h893c275.59,0,499,223.41,499,499v12H29v-12c0-275.59,223.41-499,499-499Z"
                        fill="none"
                        stroke="rgba(255, 255, 255, .5)"
                        strokeWidth={2}
                    />
                    <path
                        id="Line3"
                        d="M500,1h949c275.59,0,499,223.41,499,499v47H1v-47C1,224.41,224.41,1,500,1Z"
                        fill="none"
                        stroke="rgba(255, 255, 255, .1)"
                        strokeWidth={2}
                    />
                </svg>

                <img
                    src={ZtudioLogoBlack}
                    alt="Ztudio Logo"
                    style={{
                        position: 'absolute',
                        top: '9vw',
                        left: '50%',
                        width: '13vw',
                        minWidth: '100px',
                        transform: 'translateX(-50%)'
                    }}
                />
                <h2 style={{
                    position: 'absolute',
                    top: '13vw',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    fontSize: 'clamp(22px,2.5vw,2.5vw)',
                    fontWeight: '900',
                    whiteSpace: 'nowrap'
                }}>
                    <span style={{ color: 'black' }}>You name it,</span>
                    <span style={{ color: '#E14492' }}> we build it</span>
                </h2>
                {!isMobile && (
                    <div style={{
                        position: 'absolute',
                        top: '19vw',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>
                        <AnimatedButtonComponent>Start Building</AnimatedButtonComponent>
                    </div>
                )}
                {!isKindOfMobile && (
                    <div style={{
                        position: 'absolute',
                        top: '24.5vw',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '50px'
                    }}>
                        <>
                            <style>{`
                                .contactIcon {
                                    transition: filter 0.3s ease;
                                }
                                .contactIcon:hover {
                                    filter: invert(54%) sepia(37%) saturate(6511%) hue-rotate(320deg) brightness(97%) contrast(94%);
                                }
                            `}</style>
                            <a
                                href="https://link1.example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={XIconB} className="contactIcon" alt="Icon 1" />
                            </a>
                            <a
                                href="https://link2.example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={EmailIconCB} className="contactIcon" alt="Icon 2" />
                            </a>
                            <a
                                href="https://link3.example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={TelegramIconB} className="contactIcon" alt="Icon 3" />
                            </a>
                        </>
                    </div>
                )}
                <p style={{
                    position: 'absolute',
                    color: 'black',
                    bottom: isMobile ? 'calc(-10px + 0.5vw)' : '0.25vw',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    fontSize: 'clamp(12px,1vw,1vw)',
                    fontWeight: '700',
                    whiteSpace: 'nowrap',
                }}>
                    © 2024 Ztudio. All rights reserved
                </p>
            </div>
        </div >
    )
};

export default Footer;
