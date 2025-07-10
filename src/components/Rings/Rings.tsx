import React, { useMemo } from 'react';
import EllipseHorizontal from '../Elements/Ellipse/EllipseHorizontal';
import ICPBubble from '../Elements/ICPBubble/ICPBubble';

import ICPLogo from '/assets/projectLogos/icplogo.svg';

import ToniqLogo from '/assets/projectLogos/toniqLogo.webp'
import VibrantLogo from '/assets/projectLogos/VibrantLogo.webp'
import KonectaLogo from '/assets/projectLogos/KonectaLogo.svg'
import VaultbetLogo from '/assets/projectLogos/VaultbetLogo.webp'
import DOGMILogo from '/assets/projectLogos/DOGMILogo.webp'
import HelixLogo from '/assets/projectLogos/HelixLogo.webp'
import NodeMonitorLogo from '/assets/projectLogos/NodeMonitorLogoMin.png'
import TalusLogo from '/assets/projectLogos/TalusLogo.png'

import './Rings.css';

const Rings: React.FC = () => {
    const bigWidth = 'clamp(325px, 25vw, 650px)';
    const smallWidth = `calc(0.67 * ${bigWidth})`;

    const { bigEllipseLogos, smallEllipseLogos } = useMemo(() => {


        const availableLogos = [
            NodeMonitorLogo,
            TalusLogo,
            ToniqLogo,
            VibrantLogo,
            KonectaLogo,
            VaultbetLogo,
            DOGMILogo,
            HelixLogo,
        ];

        const shuffleArray = (array: any[]) => {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };

        const shuffledLogos = shuffleArray(availableLogos);

        const bigEllipseLogos: string[] = [];
        const smallEllipseLogos: string[] = [];

        const icpIndex = Math.floor(Math.random() * 4);
        let logoIndex = 0;
        for (let i = 0; i < 4; i++) {
            if (i === icpIndex) {
                bigEllipseLogos.push(ICPLogo);
            } else {
                bigEllipseLogos.push(shuffledLogos[logoIndex]);
                logoIndex++;
            }
        }

        for (let i = 0; i < 4; i++) {
            smallEllipseLogos.push(shuffledLogos[logoIndex]);
            logoIndex++;
        }

        return { bigEllipseLogos, smallEllipseLogos };
    }, []);

    return (
        <div className="rings-container">
            {/* Big ellipse wrapper */}
            <div className="ellipse-wrapper" style={{ width: bigWidth, zIndex: 10 }}>
                <div className="bubble bubble-top">
                    <ICPBubble imageSrc={bigEllipseLogos[0]} minSize="55px" preferredSize="4.25vw" maxSize="115px" />
                </div>
                <div className="bubble bubble-right">
                    <ICPBubble imageSrc={bigEllipseLogos[1]} minSize="55px" preferredSize="4.25vw" maxSize="115px" />
                </div>
                <div className="bubble bubble-bottom">
                    <ICPBubble imageSrc={bigEllipseLogos[2]} minSize="55px" preferredSize="4.25vw" maxSize="115px" />
                </div>
                <div className="bubble bubble-left">
                    <ICPBubble imageSrc={bigEllipseLogos[3]} minSize="55px" preferredSize="4.25vw" maxSize="115px" />
                </div>
                <div className="ellipse-container big">
                    <EllipseHorizontal />
                </div>
            </div>

            {/* Small ellipse wrapper */}
            <div className="ellipse-wrapper reverse" style={{ width: smallWidth }}>
                <div className="bubble bubble-top">
                    <ICPBubble imageSrc={smallEllipseLogos[0]} minSize="35px" preferredSize="3vw" maxSize="80px" />
                </div>
                <div className="bubble bubble-right">
                    <ICPBubble imageSrc={smallEllipseLogos[1]} minSize="35px" preferredSize="3vw" maxSize="80px" />
                </div>
                <div className="bubble bubble-bottom">
                    <ICPBubble imageSrc={smallEllipseLogos[2]} minSize="35px" preferredSize="3vw" maxSize="80px" />
                </div>
                <div className="bubble bubble-left">
                    <ICPBubble imageSrc={smallEllipseLogos[3]} minSize="35px" preferredSize="3vw" maxSize="80px" />
                </div>
                <div className="ellipse-container small">
                    <EllipseHorizontal />
                </div>
            </div>
        </div>

    );
};

export default Rings;
