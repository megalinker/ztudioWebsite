import React, { useMemo, useState } from 'react';
import './Projects.css';
import { useMediaQuery } from 'react-responsive';

import ToniqLogo from '/assets/projectLogos/toniqLogo.webp'
import RosettaLogo from '/assets/projectLogos/RosettaLogo.webp'
import VibrantLogo from '/assets/projectLogos/VibrantLogo.webp'
import KonectaLogo from '/assets/projectLogos/KonectaLogo.svg'
import VaultbetLogo from '/assets/projectLogos/VaultbetLogo.webp'
import CygnusLogo from '/assets/projectLogos/CygnusLogo.webp'
import TalusLogo from '/assets/projectLogos/TalusLogo.png'
import DOGMILogo from '/assets/projectLogos/DOGMILogo.webp'
import OISLogo from '/assets/projectLogos/OISLogo.webp'
import HelixLogo from '/assets/projectLogos/HelixLogo.webp'
import PartnrshipLogo from '/assets/projectLogos/PartnrshipLogo.svg'
import ModClubLogo from '/assets/projectLogos/ModClubLogo.webp'
import AlfangoDBLogo from '/assets/projectLogos/AlfangoDBLogo.webp'
import NodeMonitorLogo from '/assets/projectLogos/NodeMonitorLogoMin.png'

import ICPBubble from '../Elements/ICPBubble/ICPBubble';
import ZtudioIso from '/assets/ztudioIso.svg'

export interface ProjectData {
    title: string;
    description: string;
    image: string;
    projectUrl: string;
}

interface BubbleConfig {
    top: number;
    left: number;
    leftMobile?: number;
    sizePercent: number;
}


const projects: ProjectData[] = [
    {
        title: "DOGMI",
        description:
            "Provided professional consulting and tokenomics strategies for DOGMI",
        image: DOGMILogo,
        projectUrl: "https://hlyhm-haaaa-aaaai-q3jyq-cai.icp0.io/",
    },
    {
        title: "Konecta",
        description: "Architected and developed the full project infrastructure",
        image: KonectaLogo,
        projectUrl: "https://konecta.one/",
    },
    {
        title: "Vibrant",
        description: "Organized a successful NFT exhibition event in Rosario, Argentina",
        image: VibrantLogo,
        projectUrl: "https://www.youtube.com/watch?v=029ck5Zm2o4",
    },
    {
        title: "Partnrship",
        description: "Authored a successful DFINITY grant proposal and subsequently developed the project",
        image: PartnrshipLogo,
        projectUrl: "https://e7bx6-iiaaa-aaaag-qm7oq-cai.icp0.io/",
    },
    {
        title: "Toniq Labs",
        description: "Developed an automated self-mining software solution",
        image: ToniqLogo,
        projectUrl: "https://toniqlabs.com/",
    },
    {
        title: "Rosetta Coin",
        description: "Created a memecoin, including website development and comprehensive tokenomics",
        image: RosettaLogo,
        projectUrl: "https://egwoi-nqaaa-aaaai-qpena-cai.icp0.io/",
    },
    {
        title: "Vaultbet",
        description: "Developed an interactive Plinko-style betting game on the IC blockchain",
        image: VaultbetLogo,
        projectUrl: "https://vault-bet.com/arcade/3",
    },
    {
        title: "Cygnus",
        description: "Created an automated ICP cycle top-up tool with optimized pricing for canisters",
        image: CygnusLogo,
        projectUrl: "https://topge-siaaa-aaaai-qns6a-cai.ic0.app/",
    },
    {
        title: "Open Internet Summer",
        description: "Assisted in organizing a global hackathon event for Motoko Bootcamp",
        image: OISLogo,
        projectUrl: "https://www.motokobootcamp.com/",
    },
    {
        title: "Helix Labs",
        description: "Consulted and authored a DFINITY grant proposal for their multi-chain staking solution",
        image: HelixLogo,
        projectUrl: "https://www.helixlabs.org/",
    },
    {
        title: "ModClub",
        description: "Collaborated on feature development and platform enhancements",
        image: ModClubLogo,
        projectUrl: "https://ljyte-qiaaa-aaaah-qaiva-cai.raw.ic0.app/",
    },
    {
        title: "AlfangoDB",
        description: "Developed Motoko-based database architecture inspired by DynamoDB",
        image: AlfangoDBLogo,
        projectUrl: "https://github.com/sagcryptoicp/alfangodb",
    },
    {
        title: "Node Monitor",
        description: "Built a robust monitoring solution for ICP node providers",
        image: NodeMonitorLogo,
        projectUrl: "https://nodemonitor.aviatelabs.co/",
    },
    {
        title: "Talus Network",
        description: "DeFi platform currently under development based on SUI Blockchain.",
        image: TalusLogo,
        projectUrl: "https://talus.network/",
    },
];

const Projects: React.FC = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    const viewBoxValue = isMobile ? "200 0 941 1048" : "0 0 1341 1048";

    const svgWidth = isMobile ? 941 : 1341;
    const svgHeight = 1048;

    const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const bubbleConfigs: BubbleConfig[] = [
        // Group 1
        { top: 20, left: 45.33, leftMobile: 43, sizePercent: 13 },
        { top: 100 - 16.25 - 16.67, left: 45.33, leftMobile: 43, sizePercent: 13 },

        // Group 2
        { top: 38, left: 40, leftMobile: 36, sizePercent: 8 },
        { top: 38, left: 55, leftMobile: 57, sizePercent: 8 },
        { top: 100 - 35 - 11, left: 40, leftMobile: 36, sizePercent: 8 },
        { top: 100 - 35 - 11, left: 55, leftMobile: 57, sizePercent: 8 },

        // Group 3
        { top: 36, left: 33, leftMobile: 26, sizePercent: 7 },
        { top: 36, left: 63, leftMobile: 68, sizePercent: 7 },
        { top: 100 - 34 - 9, left: 33, leftMobile: 26, sizePercent: 7 },
        { top: 100 - 34 - 9, left: 63, leftMobile: 68, sizePercent: 7 },

        // Group 4a
        { top: 27, left: 40, leftMobile: 35.25, sizePercent: 5 },
        { top: 27, left: 57, leftMobile: 59.5, sizePercent: 5 },
        { top: 100 - 26 - 6.67, left: 40, leftMobile: 35, sizePercent: 5 },
        { top: 100 - 26 - 6.67, left: 57, leftMobile: 59.5, sizePercent: 5 },

        // Group 4b
        { top: 34.5, left: 27, leftMobile: 17.5, sizePercent: 5 },
        { top: 34.5, left: 70, leftMobile: 78.5, sizePercent: 5 },
        { top: 100 - 33 - 6.67, left: 27, leftMobile: 17.5, sizePercent: 5 },
        { top: 100 - 33 - 6.67, left: 70, leftMobile: 78.5, sizePercent: 5 },
    ];

    const randomProjects = useMemo<ProjectData[]>(() => {
        const total = bubbleConfigs.length;
        const pool = [...projects].sort(() => Math.random() - 0.5);
        if (total <= pool.length) return pool.slice(0, total);

        // if you ever have fewer projects than bubbles:
        const out = [...pool];
        while (out.length < total) {
            out.push(projects[Math.floor(Math.random() * projects.length)]);
        }
        return out;
    }, []);

    const centerX = isMobile ? svgWidth / 2 + 200 : svgWidth / 2;
    const centerY = svgHeight * 0.33;
    // Active bubble size: 20% of svgHeight
    const activeSizePx = (20 / 100) * svgHeight;

    return (
        <div className="projects-container">
            <h1>PROJECTS</h1>
            <svg
                width="100%"
                viewBox={viewBoxValue}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    style={{
                        animation: 'spin 10s linear infinite',
                        transformBox: 'fill-box',
                        transformOrigin: '50% 50%',
                    }}
                >
                    <g opacity={0.4} filter="url(#filter0_f_570_5491)">
                        <path
                            d="M1059.57 523.996C1059.57 736.783 887.072 909.28 674.285 909.28C461.498 909.28 289 736.783 289 523.996C289 311.209 461.498 138.711 674.285 138.711C887.072 138.711 1059.57 311.209 1059.57 523.996ZM327.528 523.996C327.528 715.504 482.777 870.752 674.285 870.752C865.793 870.752 1021.04 715.504 1021.04 523.996C1021.04 332.487 865.793 177.239 674.285 177.239C482.777 177.239 327.528 332.487 327.528 523.996Z"
                            fill="url(#paint0_linear_570_5491)"
                        />
                    </g>
                    <foreignObject x={278.465} y={128.176} width={791.639} height={791.64}>
                        <div
                            style={{
                                backdropFilter: "blur(5.27px)",
                                clipPath: "url(#bgblur_0_570_5491_clip_path)",
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    </foreignObject>
                    <g filter="url(#filter1_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                        <mask id="path-2-inside-1_570_5491" fill="white">
                            <path d="M1059.57 523.996C1059.57 736.783 887.072 909.28 674.285 909.28C461.498 909.28 289 736.783 289 523.996C289 311.209 461.498 138.711 674.285 138.711C887.072 138.711 1059.57 311.209 1059.57 523.996ZM312.117 523.996C312.117 724.015 474.265 886.163 674.285 886.163C874.304 886.163 1036.45 724.015 1036.45 523.996C1036.45 323.976 874.304 161.828 674.285 161.828C474.265 161.828 312.117 323.976 312.117 523.996Z" />
                        </mask>
                        <path
                            d="M1059.57 523.996C1059.57 736.783 887.072 909.28 674.285 909.28C461.498 909.28 289 736.783 289 523.996C289 311.209 461.498 138.711 674.285 138.711C887.072 138.711 1059.57 311.209 1059.57 523.996ZM312.117 523.996C312.117 724.015 474.265 886.163 674.285 886.163C874.304 886.163 1036.45 724.015 1036.45 523.996C1036.45 323.976 874.304 161.828 674.285 161.828C474.265 161.828 312.117 323.976 312.117 523.996Z"
                            fill="white"
                            fillOpacity={0.1}
                            shapeRendering="crispEdges"
                        />
                        <path
                            d="M1059.57 523.996C1059.57 736.783 887.072 909.28 674.285 909.28C461.498 909.28 289 736.783 289 523.996C289 311.209 461.498 138.711 674.285 138.711C887.072 138.711 1059.57 311.209 1059.57 523.996ZM312.117 523.996C312.117 724.015 474.265 886.163 674.285 886.163C874.304 886.163 1036.45 724.015 1036.45 523.996C1036.45 323.976 874.304 161.828 674.285 161.828C474.265 161.828 312.117 323.976 312.117 523.996Z"
                            fill="url(#paint1_linear_570_5491)"
                            fillOpacity={0.5}
                            shapeRendering="crispEdges"
                        />
                        <path
                            d="M1059.57 523.996C1059.57 736.783 887.072 909.28 674.285 909.28C461.498 909.28 289 736.783 289 523.996C289 311.209 461.498 138.711 674.285 138.711C887.072 138.711 1059.57 311.209 1059.57 523.996ZM312.117 523.996C312.117 724.015 474.265 886.163 674.285 886.163C874.304 886.163 1036.45 724.015 1036.45 523.996C1036.45 323.976 874.304 161.828 674.285 161.828C474.265 161.828 312.117 323.976 312.117 523.996Z"
                            stroke="url(#paint2_linear_570_5491)"
                            strokeWidth={3.36696}
                            shapeRendering="crispEdges"
                            mask="url(#path-2-inside-1_570_5491)"
                        />
                    </g>
                </g>
                {!isMobile && (
                    <>
                        <g opacity={0.3}>
                            <foreignObject x={207.586} y={144.557} width={248.403} height={756.137}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_1_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g filter="url(#filter2_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                                <mask id="path-3-inside-2_570_5491" fill="white">
                                    <path d="M438.566 883.777C435.02 889.919 427.155 892.04 421.122 888.312C360.517 850.854 310.158 798.819 274.692 736.871C237.098 671.205 217.582 596.746 218.132 521.082C218.683 445.417 239.281 371.251 277.827 306.139C314.191 244.714 365.302 193.417 426.446 156.846C432.532 153.205 440.366 155.44 443.822 161.633C447.279 167.826 445.048 175.631 438.969 179.283C381.786 213.634 333.979 261.704 299.928 319.222C263.694 380.428 244.332 450.144 243.815 521.269C243.297 592.394 261.642 662.384 296.981 724.111C330.191 782.119 377.293 830.879 433.97 866.059C439.996 869.799 442.112 877.635 438.566 883.777Z" />
                                </mask>
                                <path
                                    d="M438.566 883.777C435.02 889.919 427.155 892.04 421.122 888.312C360.517 850.854 310.158 798.819 274.692 736.871C237.098 671.205 217.582 596.746 218.132 521.082C218.683 445.417 239.281 371.251 277.827 306.139C314.191 244.714 365.302 193.417 426.446 156.846C432.532 153.205 440.366 155.44 443.822 161.633C447.279 167.826 445.048 175.631 438.969 179.283C381.786 213.634 333.979 261.704 299.928 319.222C263.694 380.428 244.332 450.144 243.815 521.269C243.297 592.394 261.642 662.384 296.981 724.111C330.191 782.119 377.293 830.879 433.97 866.059C439.996 869.799 442.112 877.635 438.566 883.777Z"
                                    stroke="url(#paint3_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-3-inside-2_570_5491)"
                                />
                            </g>
                            <foreignObject x={207.586} y={364.502} width={243.239} height={536.191}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_2_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g filter="url(#filter3_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                                <mask id="path-4-inside-3_570_5491" fill="white">
                                    <path d="M438.566 883.777C435.02 889.919 427.153 892.04 421.12 888.311C338.365 837.164 275.381 759.262 242.763 667.336C210.146 575.411 209.943 475.232 241.952 383.364C244.286 376.667 251.73 373.354 258.354 375.887C264.978 378.421 268.273 385.84 265.952 392.542C236.118 478.699 236.393 572.581 266.968 658.748C297.542 744.915 356.501 817.975 433.968 866.058C439.994 869.798 442.112 877.635 438.566 883.777Z" />
                                </mask>
                                <path
                                    d="M438.566 883.777C435.02 889.919 427.153 892.04 421.12 888.311C338.365 837.164 275.381 759.262 242.763 667.336C210.146 575.411 209.943 475.232 241.952 383.364C244.286 376.667 251.73 373.354 258.354 375.887C264.978 378.421 268.273 385.84 265.952 392.542C236.118 478.699 236.393 572.581 266.968 658.748C297.542 744.915 356.501 817.975 433.968 866.058C439.994 869.798 442.112 877.635 438.566 883.777Z"
                                    stroke="url(#paint4_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-4-inside-3_570_5491)"
                                />
                            </g>
                            <foreignObject x={236.303} y={652.899} width={214.522} height={247.795}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_3_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g filter="url(#filter4_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                                <mask id="path-5-inside-4_570_5491" fill="white">
                                    <path d="M438.566 883.777C435.02 889.919 427.153 892.04 421.12 888.311C342.368 839.638 281.509 766.728 247.696 680.544C245.105 673.941 248.597 666.58 255.274 664.189C261.951 661.798 269.283 665.283 271.886 671.88C303.632 752.341 360.477 820.442 433.968 866.058C439.994 869.798 442.112 877.635 438.566 883.777Z" />
                                </mask>
                                <path
                                    d="M438.566 883.777C435.02 889.919 427.153 892.04 421.12 888.311C342.368 839.638 281.509 766.728 247.696 680.544C245.105 673.941 248.597 666.58 255.274 664.189C261.951 661.798 269.283 665.283 271.886 671.88C303.632 752.341 360.477 820.442 433.968 866.058C439.994 869.798 442.112 877.635 438.566 883.777Z"
                                    stroke="url(#paint5_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-5-inside-4_570_5491)"
                                />
                            </g>
                        </g>

                        <g opacity={0.6}>
                            <foreignObject x={108.619} y={130.076} width={257.321} height={784.974}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_4_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g filter="url(#filter5_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                                <mask id="path-6-inside-5_570_5491" fill="white">
                                    <path d="M348.248 897.884C344.563 904.267 336.388 906.471 330.119 902.596C267.136 863.669 214.802 809.593 177.945 745.214C138.875 676.972 118.594 599.592 119.166 520.959C119.738 442.326 141.144 365.25 181.203 297.584C218.993 233.749 272.109 180.44 335.652 142.434C341.977 138.651 350.118 140.974 353.71 147.409C357.302 153.845 354.984 161.956 348.666 165.751C289.24 201.45 239.557 251.406 204.171 311.181C166.515 374.787 146.394 447.239 145.856 521.154C145.318 595.069 164.383 667.805 201.108 731.953C235.621 792.237 284.571 842.911 343.471 879.471C349.733 883.357 351.933 891.501 348.248 897.884Z" />
                                </mask>
                                <path
                                    d="M348.248 897.884C344.563 904.267 336.388 906.471 330.119 902.596C267.136 863.669 214.802 809.593 177.945 745.214C138.875 676.972 118.594 599.592 119.166 520.959C119.738 442.326 141.144 365.25 181.203 297.584C218.993 233.749 272.109 180.44 335.652 142.434C341.977 138.651 350.118 140.974 353.71 147.409C357.302 153.845 354.984 161.956 348.666 165.751C289.24 201.45 239.557 251.406 204.171 311.181C166.515 374.787 146.394 447.239 145.856 521.154C145.318 595.069 164.383 667.805 201.108 731.953C235.621 792.237 284.571 842.911 343.471 879.471C349.733 883.357 351.933 891.501 348.248 897.884Z"
                                    stroke="url(#paint6_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-6-inside-5_570_5491)"
                                />
                            </g>
                            <foreignObject x={108.619} y={358.65} width={251.954} height={556.398}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_5_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g filter="url(#filter6_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                                <mask id="path-7-inside-6_570_5491" fill="white">
                                    <path d="M348.248 897.884C344.563 904.267 336.387 906.47 330.118 902.595C244.116 849.442 178.66 768.483 144.763 672.952C110.866 577.42 110.655 473.311 143.92 377.839C146.345 370.879 154.081 367.436 160.965 370.069C167.85 372.702 171.274 380.412 168.862 387.377C137.857 476.914 138.143 574.479 169.917 664.026C201.691 753.574 262.963 829.5 343.469 879.47C349.732 883.356 351.933 891.501 348.248 897.884Z" />
                                </mask>
                                <path
                                    d="M348.248 897.884C344.563 904.267 336.387 906.47 330.118 902.595C244.116 849.442 178.66 768.483 144.763 672.952C110.866 577.42 110.655 473.311 143.92 377.839C146.345 370.879 154.081 367.436 160.965 370.069C167.85 372.702 171.274 380.412 168.862 387.377C137.857 476.914 138.143 574.479 169.917 664.026C201.691 753.574 262.963 829.5 343.469 879.47C349.732 883.356 351.933 891.501 348.248 897.884Z"
                                    stroke="url(#paint7_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-7-inside-6_570_5491)"
                                />
                            </g>
                            <foreignObject x={138.462} y={658.361} width={222.111} height={256.687}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_6_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g filter="url(#filter7_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                                <mask id="path-8-inside-7_570_5491" fill="white">
                                    <path d="M348.248 897.884C344.563 904.267 336.387 906.47 330.118 902.595C248.275 852.013 185.029 776.242 149.889 686.677C147.197 679.816 150.826 672.166 157.765 669.681C164.704 667.196 172.324 670.817 175.029 677.673C208.02 761.291 267.095 832.064 343.469 879.47C349.732 883.356 351.933 891.501 348.248 897.884Z" />
                                </mask>
                                <path
                                    d="M348.248 897.884C344.563 904.267 336.387 906.47 330.118 902.595C248.275 852.013 185.029 776.242 149.889 686.677C147.197 679.816 150.826 672.166 157.765 669.681C164.704 667.196 172.324 670.817 175.029 677.673C208.02 761.291 267.095 832.064 343.469 879.47C349.732 883.356 351.933 891.501 348.248 897.884Z"
                                    stroke="url(#paint8_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-8-inside-7_570_5491)"
                                />
                            </g>
                        </g>
                        <foreignObject x={-4.53507} y={100.451} width={275.568} height={843.972}>
                            <div
                                style={{
                                    backdropFilter: "blur(5.27px)",
                                    clipPath: "url(#bgblur_7_570_5491_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </foreignObject>
                        <g filter="url(#filter8_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                            <mask id="path-9-inside-8_570_5491" fill="white">
                                <path d="M252.787 926.746C248.817 933.622 240.012 935.996 233.258 931.822C165.411 889.888 109.035 831.635 69.3312 762.285C27.2443 688.772 5.39617 605.416 6.01269 520.71C6.62922 436.004 29.6884 352.975 72.8408 280.083C113.55 211.318 170.768 153.892 239.218 112.95C246.032 108.875 254.802 111.377 258.671 118.31C262.54 125.243 260.043 133.98 253.237 138.068C189.222 176.524 135.702 230.338 97.5823 294.73C57.019 363.249 35.3434 441.296 34.7638 520.92C34.1843 600.543 54.7215 678.898 94.2832 748C131.461 812.939 184.192 867.527 247.641 906.91C254.387 911.097 256.757 919.87 252.787 926.746Z" />
                            </mask>
                            <path
                                d="M252.787 926.746C248.817 933.622 240.012 935.996 233.258 931.822C165.411 889.888 109.035 831.635 69.3312 762.285C27.2443 688.772 5.39617 605.416 6.01269 520.71C6.62922 436.004 29.6884 352.975 72.8408 280.083C113.55 211.318 170.768 153.892 239.218 112.95C246.032 108.875 254.802 111.377 258.671 118.31C262.54 125.243 260.043 133.98 253.237 138.068C189.222 176.524 135.702 230.338 97.5823 294.73C57.019 363.249 35.3434 441.296 34.7638 520.92C34.1843 600.543 54.7215 678.898 94.2832 748C131.461 812.939 184.192 867.527 247.641 906.91C254.387 911.097 256.757 919.87 252.787 926.746Z"
                                stroke="url(#paint9_linear_570_5491)"
                                strokeWidth={3.36696}
                                shapeRendering="crispEdges"
                                mask="url(#path-9-inside-8_570_5491)"
                            />
                        </g>
                        <foreignObject x={-4.53507} y={346.68} width={269.786} height={597.744}>
                            <div
                                style={{
                                    backdropFilter: "blur(5.27px)",
                                    clipPath: "url(#bgblur_8_570_5491_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </foreignObject>
                        <g filter="url(#filter9_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                            <mask id="path-10-inside-9_570_5491" fill="white">
                                <path d="M252.787 926.746C248.817 933.622 240.01 935.995 233.257 931.821C140.613 874.563 70.1016 787.351 33.5867 684.441C-2.92829 581.532 -3.15579 469.382 32.6789 366.536C35.2913 359.038 43.6244 355.33 51.0403 358.166C58.4561 361.002 62.145 369.308 59.547 376.811C26.1469 473.263 26.4557 578.364 60.6834 674.827C94.911 771.29 160.916 853.08 247.64 906.909C254.385 911.096 256.757 919.87 252.787 926.746Z" />
                            </mask>
                            <path
                                d="M252.787 926.746C248.817 933.622 240.01 935.995 233.257 931.821C140.613 874.563 70.1016 787.351 33.5867 684.441C-2.92829 581.532 -3.15579 469.382 32.6789 366.536C35.2913 359.038 43.6244 355.33 51.0403 358.166C58.4561 361.002 62.145 369.308 59.547 376.811C26.1469 473.263 26.4557 578.364 60.6834 674.827C94.911 771.29 160.916 853.08 247.64 906.909C254.385 911.096 256.757 919.87 252.787 926.746Z"
                                stroke="url(#paint10_linear_570_5491)"
                                strokeWidth={3.36696}
                                shapeRendering="crispEdges"
                                mask="url(#path-10-inside-9_570_5491)"
                            />
                        </g>
                        <foreignObject x={27.6134} y={669.537} width={237.638} height={274.887}>
                            <div
                                style={{
                                    backdropFilter: "blur(5.27px)",
                                    clipPath: "url(#bgblur_9_570_5491_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </foreignObject>
                        <g filter="url(#filter10_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                            <mask id="path-11-inside-10_570_5491" fill="white">
                                <path d="M252.787 926.746C248.817 933.622 240.01 935.995 233.257 931.821C145.093 877.332 76.9626 795.709 39.1085 699.227C36.2087 691.836 40.1179 683.595 47.5927 680.918C55.0674 678.241 63.2758 682.142 66.1898 689.528C101.729 779.604 165.366 855.842 247.64 906.909C254.385 911.096 256.757 919.87 252.787 926.746Z" />
                            </mask>
                            <path
                                d="M252.787 926.746C248.817 933.622 240.01 935.995 233.257 931.821C145.093 877.332 76.9626 795.709 39.1085 699.227C36.2087 691.836 40.1179 683.595 47.5927 680.918C55.0674 678.241 63.2758 682.142 66.1898 689.528C101.729 779.604 165.366 855.842 247.64 906.909C254.385 911.096 256.757 919.87 252.787 926.746Z"
                                stroke="url(#paint11_linear_570_5491)"
                                strokeWidth={3.36696}
                                shapeRendering="crispEdges"
                                mask="url(#path-11-inside-10_570_5491)"
                            />
                        </g>
                        <g opacity={0.3}>
                            <foreignObject x={884.984} y={147.703} width={248.403} height={756.137}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_10_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g
                                filter="url(#filter11_di_570_5491)"
                                data-figma-bg-blur-radius={10.5351}
                            >
                                <mask id="path-12-inside-11_570_5491" fill="white">
                                    <path d="M902.407 164.619C905.953 158.477 913.819 156.356 919.851 160.085C980.456 197.543 1030.82 249.577 1066.28 311.525C1103.88 377.192 1123.39 451.65 1122.84 527.315C1122.29 602.979 1101.69 677.146 1063.15 742.258C1026.78 803.683 975.671 854.979 914.527 891.551C908.441 895.191 900.607 892.956 897.151 886.763C893.695 880.57 895.925 872.766 902.005 869.114C959.187 834.762 1006.99 786.693 1041.05 729.174C1077.28 667.969 1096.64 598.252 1097.16 527.128C1097.68 456.003 1079.33 386.012 1043.99 324.286C1010.78 266.278 963.68 217.517 907.003 182.337C900.978 178.597 898.861 170.761 902.407 164.619Z" />
                                </mask>
                                <path
                                    d="M902.407 164.619C905.953 158.477 913.819 156.356 919.851 160.085C980.456 197.543 1030.82 249.577 1066.28 311.525C1103.88 377.192 1123.39 451.65 1122.84 527.315C1122.29 602.979 1101.69 677.146 1063.15 742.258C1026.78 803.683 975.671 854.979 914.527 891.551C908.441 895.191 900.607 892.956 897.151 886.763C893.695 880.57 895.925 872.766 902.005 869.114C959.187 834.762 1006.99 786.693 1041.05 729.174C1077.28 667.969 1096.64 598.252 1097.16 527.128C1097.68 456.003 1079.33 386.012 1043.99 324.286C1010.78 266.278 963.68 217.517 907.003 182.337C900.978 178.597 898.861 170.761 902.407 164.619Z"
                                    stroke="url(#paint12_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-12-inside-11_570_5491)"
                                />
                            </g>
                            <foreignObject x={890.149} y={147.703} width={243.239} height={536.191}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_11_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g
                                filter="url(#filter12_di_570_5491)"
                                data-figma-bg-blur-radius={10.5351}
                            >
                                <mask id="path-13-inside-12_570_5491" fill="white">
                                    <path d="M902.407 164.619C905.953 158.477 913.82 156.357 919.853 160.086C1002.61 211.232 1065.59 289.135 1098.21 381.06C1130.83 472.985 1131.03 573.164 1099.02 665.033C1096.69 671.73 1089.24 675.042 1082.62 672.509C1076 669.976 1072.7 662.556 1075.02 655.855C1104.86 569.697 1104.58 475.815 1074.01 389.648C1043.43 303.482 984.472 230.422 907.005 182.338C900.979 178.598 898.861 170.761 902.407 164.619Z" />
                                </mask>
                                <path
                                    d="M902.407 164.619C905.953 158.477 913.82 156.357 919.853 160.086C1002.61 211.232 1065.59 289.135 1098.21 381.06C1130.83 472.985 1131.03 573.164 1099.02 665.033C1096.69 671.73 1089.24 675.042 1082.62 672.509C1076 669.976 1072.7 662.556 1075.02 655.855C1104.86 569.697 1104.58 475.815 1074.01 389.648C1043.43 303.482 984.472 230.422 907.005 182.338C900.979 178.598 898.861 170.761 902.407 164.619Z"
                                    stroke="url(#paint13_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-13-inside-12_570_5491)"
                                />
                            </g>
                            <foreignObject x={890.149} y={147.703} width={214.522} height={247.795}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_12_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g
                                filter="url(#filter13_di_570_5491)"
                                data-figma-bg-blur-radius={10.5351}
                            >
                                <mask id="path-14-inside-13_570_5491" fill="white">
                                    <path d="M902.407 164.619C905.953 158.477 913.82 156.357 919.853 160.086C998.605 208.759 1059.46 281.669 1093.28 367.853C1095.87 374.455 1092.38 381.816 1085.7 384.207C1079.02 386.599 1071.69 383.114 1069.09 376.516C1037.34 296.055 980.497 227.954 907.005 182.338C900.979 178.598 898.861 170.761 902.407 164.619Z" />
                                </mask>
                                <path
                                    d="M902.407 164.619C905.953 158.477 913.82 156.357 919.853 160.086C998.605 208.759 1059.46 281.669 1093.28 367.853C1095.87 374.455 1092.38 381.816 1085.7 384.207C1079.02 386.599 1071.69 383.114 1069.09 376.516C1037.34 296.055 980.497 227.954 907.005 182.338C900.979 178.598 898.861 170.761 902.407 164.619Z"
                                    stroke="url(#paint14_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-14-inside-13_570_5491)"
                                />
                            </g>
                        </g>
                        <g opacity={0.6}>
                            <foreignObject x={975.033} y={133.346} width={257.321} height={784.974}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_13_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g
                                filter="url(#filter14_di_570_5491)"
                                data-figma-bg-blur-radius={10.5351}
                            >
                                <mask id="path-15-inside-14_570_5491" fill="white">
                                    <path d="M992.726 150.513C996.411 144.13 1004.59 141.926 1010.85 145.801C1073.84 184.728 1126.17 238.804 1163.03 303.182C1202.1 371.425 1222.38 448.804 1221.81 527.437C1221.24 606.07 1199.83 683.146 1159.77 750.813C1121.98 814.648 1068.86 867.956 1005.32 905.962C998.997 909.746 990.856 907.423 987.264 900.987C983.672 894.551 985.99 886.441 992.308 882.645C1051.73 846.946 1101.42 796.991 1136.8 737.216C1174.46 673.609 1194.58 601.158 1195.12 527.243C1195.66 453.328 1176.59 380.591 1139.87 316.443C1105.35 256.16 1056.4 205.486 997.503 168.926C991.241 165.039 989.041 156.895 992.726 150.513Z" />
                                </mask>
                                <path
                                    d="M992.726 150.513C996.411 144.13 1004.59 141.926 1010.85 145.801C1073.84 184.728 1126.17 238.804 1163.03 303.182C1202.1 371.425 1222.38 448.804 1221.81 527.437C1221.24 606.07 1199.83 683.146 1159.77 750.813C1121.98 814.648 1068.86 867.956 1005.32 905.962C998.997 909.746 990.856 907.423 987.264 900.987C983.672 894.551 985.99 886.441 992.308 882.645C1051.73 846.946 1101.42 796.991 1136.8 737.216C1174.46 673.609 1194.58 601.158 1195.12 527.243C1195.66 453.328 1176.59 380.591 1139.87 316.443C1105.35 256.16 1056.4 205.486 997.503 168.926C991.241 165.039 989.041 156.895 992.726 150.513Z"
                                    stroke="url(#paint15_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-15-inside-14_570_5491)"
                                />
                            </g>
                            <foreignObject x={980.4} y={133.348} width={251.954} height={556.398}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_14_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g
                                filter="url(#filter15_di_570_5491)"
                                data-figma-bg-blur-radius={10.5351}
                            >
                                <mask id="path-16-inside-15_570_5491" fill="white">
                                    <path d="M992.726 150.513C996.411 144.13 1004.59 141.926 1010.86 145.801C1096.86 198.955 1162.31 279.913 1196.21 375.445C1230.11 470.976 1230.32 575.086 1197.05 670.558C1194.63 677.518 1186.89 680.96 1180.01 678.328C1173.12 675.695 1169.7 667.984 1172.11 661.02C1203.12 571.483 1202.83 473.917 1171.06 384.37C1139.28 294.823 1078.01 218.897 997.504 168.927C991.242 165.04 989.041 156.895 992.726 150.513Z" />
                                </mask>
                                <path
                                    d="M992.726 150.513C996.411 144.13 1004.59 141.926 1010.86 145.801C1096.86 198.955 1162.31 279.913 1196.21 375.445C1230.11 470.976 1230.32 575.086 1197.05 670.558C1194.63 677.518 1186.89 680.96 1180.01 678.328C1173.12 675.695 1169.7 667.984 1172.11 661.02C1203.12 571.483 1202.83 473.917 1171.06 384.37C1139.28 294.823 1078.01 218.897 997.504 168.927C991.242 165.04 989.041 156.895 992.726 150.513Z"
                                    stroke="url(#paint16_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-16-inside-15_570_5491)"
                                />
                            </g>
                            <foreignObject x={980.4} y={133.348} width={222.111} height={256.687}>
                                <div
                                    style={{
                                        backdropFilter: "blur(5.27px)",
                                        clipPath: "url(#bgblur_15_570_5491_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            </foreignObject>
                            <g
                                filter="url(#filter16_di_570_5491)"
                                data-figma-bg-blur-radius={10.5351}
                            >
                                <mask id="path-17-inside-16_570_5491" fill="white">
                                    <path d="M992.726 150.513C996.411 144.13 1004.59 141.926 1010.86 145.801C1092.7 196.384 1155.94 272.154 1191.08 361.719C1193.78 368.581 1190.15 376.231 1183.21 378.716C1176.27 381.201 1168.65 377.579 1165.94 370.723C1132.95 287.105 1073.88 216.333 997.504 168.927C991.242 165.04 989.041 156.895 992.726 150.513Z" />
                                </mask>
                                <path
                                    d="M992.726 150.513C996.411 144.13 1004.59 141.926 1010.86 145.801C1092.7 196.384 1155.94 272.154 1191.08 361.719C1193.78 368.581 1190.15 376.231 1183.21 378.716C1176.27 381.201 1168.65 377.579 1165.94 370.723C1132.95 287.105 1073.88 216.333 997.504 168.927C991.242 165.04 989.041 156.895 992.726 150.513Z"
                                    stroke="url(#paint17_linear_570_5491)"
                                    strokeWidth={3.36696}
                                    shapeRendering="crispEdges"
                                    mask="url(#path-17-inside-16_570_5491)"
                                />
                            </g>
                        </g>
                        <foreignObject x={1069.94} y={103.973} width={275.567} height={843.972}>
                            <div
                                style={{
                                    backdropFilter: "blur(5.27px)",
                                    clipPath: "url(#bgblur_16_570_5491_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </foreignObject>
                        <g filter="url(#filter17_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                            <mask id="path-18-inside-17_570_5491" fill="white">
                                <path d="M1088.19 121.651C1092.16 114.775 1100.96 112.4 1107.72 116.575C1175.56 158.508 1231.94 216.761 1271.64 286.111C1313.73 359.624 1335.58 442.98 1334.96 527.686C1334.34 612.392 1311.28 695.421 1268.13 768.314C1227.42 837.079 1170.21 894.505 1101.75 935.446C1094.94 939.522 1086.17 937.019 1082.3 930.086C1078.43 923.154 1080.93 914.417 1087.74 910.328C1151.75 871.872 1205.27 818.058 1243.39 753.667C1283.95 685.148 1305.63 607.101 1306.21 527.477C1306.79 447.853 1286.25 369.499 1246.69 300.396C1209.51 235.457 1156.78 180.87 1093.33 141.486C1086.59 137.299 1084.22 128.527 1088.19 121.651Z" />
                            </mask>
                            <path
                                d="M1088.19 121.651C1092.16 114.775 1100.96 112.4 1107.72 116.575C1175.56 158.508 1231.94 216.761 1271.64 286.111C1313.73 359.624 1335.58 442.98 1334.96 527.686C1334.34 612.392 1311.28 695.421 1268.13 768.314C1227.42 837.079 1170.21 894.505 1101.75 935.446C1094.94 939.522 1086.17 937.019 1082.3 930.086C1078.43 923.154 1080.93 914.417 1087.74 910.328C1151.75 871.872 1205.27 818.058 1243.39 753.667C1283.95 685.148 1305.63 607.101 1306.21 527.477C1306.79 447.853 1286.25 369.499 1246.69 300.396C1209.51 235.457 1156.78 180.87 1093.33 141.486C1086.59 137.299 1084.22 128.527 1088.19 121.651Z"
                                stroke="url(#paint18_linear_570_5491)"
                                strokeWidth={3.36696}
                                shapeRendering="crispEdges"
                                mask="url(#path-18-inside-17_570_5491)"
                            />
                        </g>
                        <foreignObject x={1075.72} y={103.973} width={269.786} height={597.744}>
                            <div
                                style={{
                                    backdropFilter: "blur(5.27px)",
                                    clipPath: "url(#bgblur_17_570_5491_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </foreignObject>
                        <g filter="url(#filter18_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                            <mask id="path-19-inside-18_570_5491" fill="white">
                                <path d="M1088.19 121.651C1092.16 114.775 1100.96 112.401 1107.72 116.576C1200.36 173.834 1270.87 261.046 1307.39 363.955C1343.9 466.865 1344.13 579.015 1308.29 681.86C1305.68 689.358 1297.35 693.066 1289.93 690.23C1282.52 687.394 1278.83 679.088 1281.43 671.586C1314.83 575.133 1314.52 470.033 1280.29 373.57C1246.06 277.106 1180.06 195.317 1093.33 141.487C1086.59 137.3 1084.22 128.527 1088.19 121.651Z" />
                            </mask>
                            <path
                                d="M1088.19 121.651C1092.16 114.775 1100.96 112.401 1107.72 116.576C1200.36 173.834 1270.87 261.046 1307.39 363.955C1343.9 466.865 1344.13 579.015 1308.29 681.86C1305.68 689.358 1297.35 693.066 1289.93 690.23C1282.52 687.394 1278.83 679.088 1281.43 671.586C1314.83 575.133 1314.52 470.033 1280.29 373.57C1246.06 277.106 1180.06 195.317 1093.33 141.487C1086.59 137.3 1084.22 128.527 1088.19 121.651Z"
                                stroke="url(#paint19_linear_570_5491)"
                                strokeWidth={3.36696}
                                shapeRendering="crispEdges"
                                mask="url(#path-19-inside-18_570_5491)"
                            />
                        </g>
                        <foreignObject x={1075.72} y={103.973} width={237.638} height={274.887}>
                            <div
                                style={{
                                    backdropFilter: "blur(5.27px)",
                                    clipPath: "url(#bgblur_18_570_5491_clip_path)",
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        </foreignObject>
                        <g filter="url(#filter19_di_570_5491)" data-figma-bg-blur-radius={10.5351}>
                            <mask id="path-20-inside-19_570_5491" fill="white">
                                <path d="M1088.19 121.651C1092.16 114.775 1100.96 112.401 1107.72 116.576C1195.88 171.065 1264.01 252.687 1301.86 349.17C1304.76 356.561 1300.86 364.802 1293.38 367.479C1285.91 370.156 1277.7 366.254 1274.78 358.869C1239.24 268.793 1175.61 192.554 1093.33 141.487C1086.59 137.3 1084.22 128.527 1088.19 121.651Z" />
                            </mask>
                            <path
                                d="M1088.19 121.651C1092.16 114.775 1100.96 112.401 1107.72 116.576C1195.88 171.065 1264.01 252.687 1301.86 349.17C1304.76 356.561 1300.86 364.802 1293.38 367.479C1285.91 370.156 1277.7 366.254 1274.78 358.869C1239.24 268.793 1175.61 192.554 1093.33 141.487C1086.59 137.3 1084.22 128.527 1088.19 121.651Z"
                                stroke="url(#paint20_linear_570_5491)"
                                strokeWidth={3.36696}
                                shapeRendering="crispEdges"
                                mask="url(#path-20-inside-19_570_5491)"
                            />
                        </g>
                    </>
                )}
                <g id="Capa_2" data-name="Capa 2">
                    <circle
                        id="CircleShape"
                        cx={centerX}
                        cy={svgHeight / 2}
                        r={387.21}
                        fill="none"
                        strokeWidth={0}
                        style={{
                            pointerEvents: activeProject ? 'all' : 'none',
                            cursor: activeProject ? 'pointer' : 'default'
                        }}
                        onClick={() => activeProject && setActiveProject(null)}
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_570_5491"
                        x={150.533}
                        y={0.24382}
                        width={1047.5}
                        height={1047.5}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation={69.2336}
                            result="effect1_foregroundBlur_570_5491"
                        />
                    </filter>
                    <filter
                        id="filter1_di_570_5491"
                        x={278.465}
                        y={128.176}
                        width={791.639}
                        height={791.64}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_0_570_5491_clip_path">
                        <path
                            transform="translate(-278.465 -128.176)"
                            d="M1059.57 523.996C1059.57 736.783 887.072 909.28 674.285 909.28C461.498 909.28 289 736.783 289 523.996C289 311.209 461.498 138.711 674.285 138.711C887.072 138.711 1059.57 311.209 1059.57 523.996ZM312.117 523.996C312.117 724.015 474.265 886.163 674.285 886.163C874.304 886.163 1036.45 724.015 1036.45 523.996C1036.45 323.976 874.304 161.828 674.285 161.828C474.265 161.828 312.117 323.976 312.117 523.996Z"
                        />
                    </clipPath>
                    <filter
                        id="filter2_di_570_5491"
                        x={207.586}
                        y={144.557}
                        width={248.403}
                        height={756.137}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_1_570_5491_clip_path">
                        <path
                            transform="translate(-207.586 -144.557)"
                            d="M438.566 883.777C435.02 889.919 427.155 892.04 421.122 888.312C360.517 850.854 310.158 798.819 274.692 736.871C237.098 671.205 217.582 596.746 218.132 521.082C218.683 445.417 239.281 371.251 277.827 306.139C314.191 244.714 365.302 193.417 426.446 156.846C432.532 153.205 440.366 155.44 443.822 161.633C447.279 167.826 445.048 175.631 438.969 179.283C381.786 213.634 333.979 261.704 299.928 319.222C263.694 380.428 244.332 450.144 243.815 521.269C243.297 592.394 261.642 662.384 296.981 724.111C330.191 782.119 377.293 830.879 433.97 866.059C439.996 869.799 442.112 877.635 438.566 883.777Z"
                        />
                    </clipPath>
                    <filter
                        id="filter3_di_570_5491"
                        x={207.586}
                        y={364.502}
                        width={243.239}
                        height={536.191}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_2_570_5491_clip_path">
                        <path
                            transform="translate(-207.586 -364.502)"
                            d="M438.566 883.777C435.02 889.919 427.153 892.04 421.12 888.311C338.365 837.164 275.381 759.262 242.763 667.336C210.146 575.411 209.943 475.232 241.952 383.364C244.286 376.667 251.73 373.354 258.354 375.887C264.978 378.421 268.273 385.84 265.952 392.542C236.118 478.699 236.393 572.581 266.968 658.748C297.542 744.915 356.501 817.975 433.968 866.058C439.994 869.798 442.112 877.635 438.566 883.777Z"
                        />
                    </clipPath>
                    <filter
                        id="filter4_di_570_5491"
                        x={236.303}
                        y={652.899}
                        width={214.522}
                        height={247.795}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_3_570_5491_clip_path">
                        <path
                            transform="translate(-236.303 -652.899)"
                            d="M438.566 883.777C435.02 889.919 427.153 892.04 421.12 888.311C342.368 839.638 281.509 766.728 247.696 680.544C245.105 673.941 248.597 666.58 255.274 664.189C261.951 661.798 269.283 665.283 271.886 671.88C303.632 752.341 360.477 820.442 433.968 866.058C439.994 869.798 442.112 877.635 438.566 883.777Z"
                        />
                    </clipPath>
                    <filter
                        id="filter5_di_570_5491"
                        x={108.619}
                        y={130.076}
                        width={257.321}
                        height={784.974}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_4_570_5491_clip_path">
                        <path
                            transform="translate(-108.619 -130.076)"
                            d="M348.248 897.884C344.563 904.267 336.388 906.471 330.119 902.596C267.136 863.669 214.802 809.593 177.945 745.214C138.875 676.972 118.594 599.592 119.166 520.959C119.738 442.326 141.144 365.25 181.203 297.584C218.993 233.749 272.109 180.44 335.652 142.434C341.977 138.651 350.118 140.974 353.71 147.409C357.302 153.845 354.984 161.956 348.666 165.751C289.24 201.45 239.557 251.406 204.171 311.181C166.515 374.787 146.394 447.239 145.856 521.154C145.318 595.069 164.383 667.805 201.108 731.953C235.621 792.237 284.571 842.911 343.471 879.471C349.733 883.357 351.933 891.501 348.248 897.884Z"
                        />
                    </clipPath>
                    <filter
                        id="filter6_di_570_5491"
                        x={108.619}
                        y={358.65}
                        width={251.954}
                        height={556.398}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_5_570_5491_clip_path">
                        <path
                            transform="translate(-108.619 -358.65)"
                            d="M348.248 897.884C344.563 904.267 336.387 906.47 330.118 902.595C244.116 849.442 178.66 768.483 144.763 672.952C110.866 577.42 110.655 473.311 143.92 377.839C146.345 370.879 154.081 367.436 160.965 370.069C167.85 372.702 171.274 380.412 168.862 387.377C137.857 476.914 138.143 574.479 169.917 664.026C201.691 753.574 262.963 829.5 343.469 879.47C349.732 883.356 351.933 891.501 348.248 897.884Z"
                        />
                    </clipPath>
                    <filter
                        id="filter7_di_570_5491"
                        x={138.462}
                        y={658.361}
                        width={222.111}
                        height={256.687}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_6_570_5491_clip_path">
                        <path
                            transform="translate(-138.462 -658.361)"
                            d="M348.248 897.884C344.563 904.267 336.387 906.47 330.118 902.595C248.275 852.013 185.029 776.242 149.889 686.677C147.197 679.816 150.826 672.166 157.765 669.681C164.704 667.196 172.324 670.817 175.029 677.673C208.02 761.291 267.095 832.064 343.469 879.47C349.732 883.356 351.933 891.501 348.248 897.884Z"
                        />
                    </clipPath>
                    <filter
                        id="filter8_di_570_5491"
                        x={-4.53507}
                        y={100.451}
                        width={275.568}
                        height={843.972}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_7_570_5491_clip_path">
                        <path
                            transform="translate(4.53507 -100.451)"
                            d="M252.787 926.746C248.817 933.622 240.012 935.996 233.258 931.822C165.411 889.888 109.035 831.635 69.3312 762.285C27.2443 688.772 5.39617 605.416 6.01269 520.71C6.62922 436.004 29.6884 352.975 72.8408 280.083C113.55 211.318 170.768 153.892 239.218 112.95C246.032 108.875 254.802 111.377 258.671 118.31C262.54 125.243 260.043 133.98 253.237 138.068C189.222 176.524 135.702 230.338 97.5823 294.73C57.019 363.249 35.3434 441.296 34.7638 520.92C34.1843 600.543 54.7215 678.898 94.2832 748C131.461 812.939 184.192 867.527 247.641 906.91C254.387 911.097 256.757 919.87 252.787 926.746Z"
                        />
                    </clipPath>
                    <filter
                        id="filter9_di_570_5491"
                        x={-4.53507}
                        y={346.68}
                        width={269.786}
                        height={597.744}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_8_570_5491_clip_path">
                        <path
                            transform="translate(4.53507 -346.68)"
                            d="M252.787 926.746C248.817 933.622 240.01 935.995 233.257 931.821C140.613 874.563 70.1016 787.351 33.5867 684.441C-2.92829 581.532 -3.15579 469.382 32.6789 366.536C35.2913 359.038 43.6244 355.33 51.0403 358.166C58.4561 361.002 62.145 369.308 59.547 376.811C26.1469 473.263 26.4557 578.364 60.6834 674.827C94.911 771.29 160.916 853.08 247.64 906.909C254.385 911.096 256.757 919.87 252.787 926.746Z"
                        />
                    </clipPath>
                    <filter
                        id="filter10_di_570_5491"
                        x={27.6134}
                        y={669.537}
                        width={237.638}
                        height={274.887}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_9_570_5491_clip_path">
                        <path
                            transform="translate(-27.6134 -669.537)"
                            d="M252.787 926.746C248.817 933.622 240.01 935.995 233.257 931.821C145.093 877.332 76.9626 795.709 39.1085 699.227C36.2087 691.836 40.1179 683.595 47.5927 680.918C55.0674 678.241 63.2758 682.142 66.1898 689.528C101.729 779.604 165.366 855.842 247.64 906.909C254.385 911.096 256.757 919.87 252.787 926.746Z"
                        />
                    </clipPath>
                    <filter
                        id="filter11_di_570_5491"
                        x={884.984}
                        y={147.703}
                        width={248.403}
                        height={756.137}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_10_570_5491_clip_path">
                        <path
                            transform="translate(-884.984 -147.703)"
                            d="M902.407 164.619C905.953 158.477 913.819 156.356 919.851 160.085C980.456 197.543 1030.82 249.577 1066.28 311.525C1103.88 377.192 1123.39 451.65 1122.84 527.315C1122.29 602.979 1101.69 677.146 1063.15 742.258C1026.78 803.683 975.671 854.979 914.527 891.551C908.441 895.191 900.607 892.956 897.151 886.763C893.695 880.57 895.925 872.766 902.005 869.114C959.187 834.762 1006.99 786.693 1041.05 729.174C1077.28 667.969 1096.64 598.252 1097.16 527.128C1097.68 456.003 1079.33 386.012 1043.99 324.286C1010.78 266.278 963.68 217.517 907.003 182.337C900.978 178.597 898.861 170.761 902.407 164.619Z"
                        />
                    </clipPath>
                    <filter
                        id="filter12_di_570_5491"
                        x={890.149}
                        y={147.703}
                        width={243.239}
                        height={536.191}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_11_570_5491_clip_path">
                        <path
                            transform="translate(-890.149 -147.703)"
                            d="M902.407 164.619C905.953 158.477 913.82 156.357 919.853 160.086C1002.61 211.232 1065.59 289.135 1098.21 381.06C1130.83 472.985 1131.03 573.164 1099.02 665.033C1096.69 671.73 1089.24 675.042 1082.62 672.509C1076 669.976 1072.7 662.556 1075.02 655.855C1104.86 569.697 1104.58 475.815 1074.01 389.648C1043.43 303.482 984.472 230.422 907.005 182.338C900.979 178.598 898.861 170.761 902.407 164.619Z"
                        />
                    </clipPath>
                    <filter
                        id="filter13_di_570_5491"
                        x={890.149}
                        y={147.703}
                        width={214.522}
                        height={247.795}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_12_570_5491_clip_path">
                        <path
                            transform="translate(-890.149 -147.703)"
                            d="M902.407 164.619C905.953 158.477 913.82 156.357 919.853 160.086C998.605 208.759 1059.46 281.669 1093.28 367.853C1095.87 374.455 1092.38 381.816 1085.7 384.207C1079.02 386.599 1071.69 383.114 1069.09 376.516C1037.34 296.055 980.497 227.954 907.005 182.338C900.979 178.598 898.861 170.761 902.407 164.619Z"
                        />
                    </clipPath>
                    <filter
                        id="filter14_di_570_5491"
                        x={975.033}
                        y={133.346}
                        width={257.321}
                        height={784.974}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_13_570_5491_clip_path">
                        <path
                            transform="translate(-975.033 -133.346)"
                            d="M992.726 150.513C996.411 144.13 1004.59 141.926 1010.85 145.801C1073.84 184.728 1126.17 238.804 1163.03 303.182C1202.1 371.425 1222.38 448.804 1221.81 527.437C1221.24 606.07 1199.83 683.146 1159.77 750.813C1121.98 814.648 1068.86 867.956 1005.32 905.962C998.997 909.746 990.856 907.423 987.264 900.987C983.672 894.551 985.99 886.441 992.308 882.645C1051.73 846.946 1101.42 796.991 1136.8 737.216C1174.46 673.609 1194.58 601.158 1195.12 527.243C1195.66 453.328 1176.59 380.591 1139.87 316.443C1105.35 256.16 1056.4 205.486 997.503 168.926C991.241 165.039 989.041 156.895 992.726 150.513Z"
                        />
                    </clipPath>
                    <filter
                        id="filter15_di_570_5491"
                        x={980.4}
                        y={133.348}
                        width={251.954}
                        height={556.398}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_14_570_5491_clip_path">
                        <path
                            transform="translate(-980.4 -133.348)"
                            d="M992.726 150.513C996.411 144.13 1004.59 141.926 1010.86 145.801C1096.86 198.955 1162.31 279.913 1196.21 375.445C1230.11 470.976 1230.32 575.086 1197.05 670.558C1194.63 677.518 1186.89 680.96 1180.01 678.328C1173.12 675.695 1169.7 667.984 1172.11 661.02C1203.12 571.483 1202.83 473.917 1171.06 384.37C1139.28 294.823 1078.01 218.897 997.504 168.927C991.242 165.04 989.041 156.895 992.726 150.513Z"
                        />
                    </clipPath>
                    <filter
                        id="filter16_di_570_5491"
                        x={980.4}
                        y={133.348}
                        width={222.111}
                        height={256.687}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_15_570_5491_clip_path">
                        <path
                            transform="translate(-980.4 -133.348)"
                            d="M992.726 150.513C996.411 144.13 1004.59 141.926 1010.86 145.801C1092.7 196.384 1155.94 272.154 1191.08 361.719C1193.78 368.581 1190.15 376.231 1183.21 378.716C1176.27 381.201 1168.65 377.579 1165.94 370.723C1132.95 287.105 1073.88 216.333 997.504 168.927C991.242 165.04 989.041 156.895 992.726 150.513Z"
                        />
                    </clipPath>
                    <filter
                        id="filter17_di_570_5491"
                        x={1069.94}
                        y={103.973}
                        width={275.567}
                        height={843.972}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_16_570_5491_clip_path">
                        <path
                            transform="translate(-1069.94 -103.973)"
                            d="M1088.19 121.651C1092.16 114.775 1100.96 112.4 1107.72 116.575C1175.56 158.508 1231.94 216.761 1271.64 286.111C1313.73 359.624 1335.58 442.98 1334.96 527.686C1334.34 612.392 1311.28 695.421 1268.13 768.314C1227.42 837.079 1170.21 894.505 1101.75 935.446C1094.94 939.522 1086.17 937.019 1082.3 930.086C1078.43 923.154 1080.93 914.417 1087.74 910.328C1151.75 871.872 1205.27 818.058 1243.39 753.667C1283.95 685.148 1305.63 607.101 1306.21 527.477C1306.79 447.853 1286.25 369.499 1246.69 300.396C1209.51 235.457 1156.78 180.87 1093.33 141.486C1086.59 137.299 1084.22 128.527 1088.19 121.651Z"
                        />
                    </clipPath>
                    <filter
                        id="filter18_di_570_5491"
                        x={1075.72}
                        y={103.973}
                        width={269.786}
                        height={597.744}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_17_570_5491_clip_path">
                        <path
                            transform="translate(-1075.72 -103.973)"
                            d="M1088.19 121.651C1092.16 114.775 1100.96 112.401 1107.72 116.576C1200.36 173.834 1270.87 261.046 1307.39 363.955C1343.9 466.865 1344.13 579.015 1308.29 681.86C1305.68 689.358 1297.35 693.066 1289.93 690.23C1282.52 687.394 1278.83 679.088 1281.43 671.586C1314.83 575.133 1314.52 470.033 1280.29 373.57C1246.06 277.106 1180.06 195.317 1093.33 141.487C1086.59 137.3 1084.22 128.527 1088.19 121.651Z"
                        />
                    </clipPath>
                    <filter
                        id="filter19_di_570_5491"
                        x={1075.72}
                        y={103.973}
                        width={237.638}
                        height={274.887}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={2.70166} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_570_5491"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_570_5491"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy={2.63576} />
                        <feGaussianBlur stdDeviation={4.94205} />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_570_5491"
                        />
                    </filter>
                    <clipPath id="bgblur_18_570_5491_clip_path">
                        <path
                            transform="translate(-1075.72 -103.973)"
                            d="M1088.19 121.651C1092.16 114.775 1100.96 112.401 1107.72 116.576C1195.88 171.065 1264.01 252.687 1301.86 349.17C1304.76 356.561 1300.86 364.802 1293.38 367.479C1285.91 370.156 1277.7 366.254 1274.78 358.869C1239.24 268.793 1175.61 192.554 1093.33 141.487C1086.59 137.3 1084.22 128.527 1088.19 121.651Z"
                        />
                    </clipPath>
                    <linearGradient
                        id="paint0_linear_570_5491"
                        x1={289}
                        y1={523.996}
                        x2={1059.57}
                        y2={523.996}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_570_5491"
                        x1={674.285}
                        y1={3.86127}
                        x2={674.285}
                        y2={1044.13}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" stopOpacity={0.5} />
                        <stop offset={0.504907} stopOpacity={0} />
                        <stop offset={1} stopColor="white" stopOpacity={0.5} />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_570_5491"
                        x1={289}
                        y1={523.996}
                        x2={1059.57}
                        y2={523.996}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_570_5491"
                        x1={218.121}
                        y1={524.197}
                        x2={1074.22}
                        y2={524.197}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint4_linear_570_5491"
                        x1={218.121}
                        y1={524.197}
                        x2={1074.22}
                        y2={524.197}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint5_linear_570_5491"
                        x1={218.121}
                        y1={524.197}
                        x2={1074.22}
                        y2={524.197}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint6_linear_570_5491"
                        x1={119.154}
                        y1={524.197}
                        x2={1008.84}
                        y2={524.197}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint7_linear_570_5491"
                        x1={119.154}
                        y1={524.197}
                        x2={1008.84}
                        y2={524.197}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint8_linear_570_5491"
                        x1={119.154}
                        y1={524.197}
                        x2={1008.84}
                        y2={524.197}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint9_linear_570_5491"
                        x1={6}
                        y1={524.198}
                        x2={964.396}
                        y2={524.198}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint10_linear_570_5491"
                        x1={6}
                        y1={524.198}
                        x2={964.396}
                        y2={524.198}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint11_linear_570_5491"
                        x1={6}
                        y1={524.198}
                        x2={964.396}
                        y2={524.198}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint12_linear_570_5491"
                        x1={1122.85}
                        y1={524.199}
                        x2={266.754}
                        y2={524.199}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint13_linear_570_5491"
                        x1={1122.85}
                        y1={524.199}
                        x2={266.754}
                        y2={524.199}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint14_linear_570_5491"
                        x1={1122.85}
                        y1={524.199}
                        x2={266.754}
                        y2={524.199}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint15_linear_570_5491"
                        x1={1221.82}
                        y1={524.199}
                        x2={332.136}
                        y2={524.199}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint16_linear_570_5491"
                        x1={1221.82}
                        y1={524.199}
                        x2={332.136}
                        y2={524.199}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint17_linear_570_5491"
                        x1={1221.82}
                        y1={524.199}
                        x2={332.136}
                        y2={524.199}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint18_linear_570_5491"
                        x1={1334.97}
                        y1={524.198}
                        x2={376.577}
                        y2={524.198}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint19_linear_570_5491"
                        x1={1334.97}
                        y1={524.198}
                        x2={376.577}
                        y2={524.198}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                    <linearGradient
                        id="paint20_linear_570_5491"
                        x1={1334.97}
                        y1={524.198}
                        x2={376.577}
                        y2={524.198}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E14E87" />
                        <stop offset={0.5} stopColor="#E8B125" />
                        <stop offset={1} stopColor="#2BC9EC" />
                    </linearGradient>
                </defs>
                {bubbleConfigs.map((config, index) => {
                    // Hide every bubble except the active one (once a project is selected)

                    const effectiveLeft = isMobile ? config.leftMobile ?? config.left : config.left;
                    const startX = (effectiveLeft / 100) * svgWidth + (isMobile ? 200 : 0);
                    const startY = (config.top / 100) * svgHeight;
                    const startSize = (config.sizePercent / 100) * svgHeight;

                    const isActive = activeProject && index === activeIndex;

                    /* ---------- FINAL transform for active bubble ---------- */
                    let transform = `translate(${startX}px, ${startY}px)`;
                    let scale = 1;

                    if (isActive) {
                        scale = activeSizePx / startSize; // how much larger it needs to get
                        const targetX = centerX - (startSize * scale) / 2;
                        const targetY = centerY - (startSize * scale) / 2;
                        transform = `translate(${targetX}px, ${targetY}px) scale(${scale})`;
                    }

                    const project = randomProjects[index];
                    const opacity = activeProject
                        ? isActive ? 1 : 0          // fade others out
                        : 1;

                    return (
                        <g
                            key={index}
                            style={{
                                transformBox: 'fill-box',
                                transformOrigin: 'top left',
                                transition: `transform 0.5s ease, opacity 400ms ease`,
                                cursor: isActive ? 'default' : 'pointer',
                                pointerEvents: isActive || !activeProject ? 'auto' : 'none',
                                opacity,
                                transform,
                            }}
                            onClick={() => {
                                if (!isActive) {
                                    setActiveProject(project);
                                    setActiveIndex(index);
                                }
                            }}
                        >
                            <foreignObject width={startSize} height={startSize}>
                                <ICPBubble
                                    imageSrc={project.image}
                                    minSize={`${startSize}px`}
                                    preferredSize={`${startSize}px`}
                                    maxSize={`${startSize}px`}
                                />
                            </foreignObject>
                        </g>
                    );
                })}
            </svg>

            <img
                src={ZtudioIso}
                alt="Ztudio Logo"
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: isMobile
                        ? 'translate(-40%, calc(1vw + 10px))'
                        : 'translate(-40%, 35%)',
                    width: isMobile ? '8vw' : '4vw',
                    transition: `opacity 400ms ease`,
                    opacity: activeProject ? 0 : 1,
                    pointerEvents: 'none',
                }}
            />

            {activeProject && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                        width: isMobile ? '70%' : '40%',
                    }}
                    onClick={() => setActiveProject(null)}
                >
                    <p style={{ fontSize: 'clamp(16px,2vw,32px)', lineHeight: 1.2, cursor: 'pointer', userSelect: 'none' }}>{activeProject.description}</p>
                    <button
                        className="view-project-button"
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(activeProject.projectUrl, '_blank');
                        }}
                        style={{
                            color: 'black',
                            padding: '10px 20px',
                            borderRadius: '50px',
                            fontSize: '16px',
                            borderWidth: 0,
                            marginTop: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        View Project
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects;
