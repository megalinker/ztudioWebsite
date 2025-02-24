import React from 'react';

interface ICPBubbleProps {
    imageSrc: string;
    minSize: string;
    preferredSize: string;
    maxSize: string;
}

const ICPBubble: React.FC<ICPBubbleProps> = ({ imageSrc, minSize, preferredSize, maxSize }) => {

    const baseSize = 101.52;
    const imageScale = 0.75;
    const imageSize = baseSize * imageScale;
    const offset = (baseSize - imageSize) / 2;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: `clamp(${minSize}, ${preferredSize}, ${maxSize})` }}>
            <svg
                id="Circulito"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox={`0 0 ${baseSize} ${baseSize}`}
                style={{ maxWidth: '100%', height: 'auto' }}
            >
                <defs>
                    <linearGradient
                        id="Degradado_sin_nombre_47"
                        data-name="Degradado sin nombre 47"
                        x1={baseSize / 2}
                        y1="503.77"
                        x2={baseSize / 2}
                        y2="366.71"
                        gradientTransform="translate(0 486) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#fff" stopOpacity=".5" />
                        <stop offset=".5" stopColor="#000" stopOpacity="0" />
                        <stop offset="1" stopColor="#fff" stopOpacity=".5" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_48"
                        data-name="Degradado sin nombre 48"
                        x1="0"
                        y1="435.24"
                        x2="101.52"
                        y2="435.24"
                        gradientTransform="translate(0 486) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#e14e87" />
                        <stop offset=".5" stopColor="#e8b125" />
                        <stop offset="1" stopColor="#2bc9ec" />
                    </linearGradient>
                    <clipPath id="roundImage">
                        <circle cx={offset + imageSize / 2} cy={offset + imageSize / 2} r={imageSize / 2} />
                    </clipPath>
                </defs>
                <rect
                    id="BaseBlanco"
                    x="0"
                    y="0"
                    width={baseSize}
                    height={baseSize}
                    rx={baseSize / 2}
                    ry={baseSize / 2}
                    shapeRendering="crispEdges"
                    fill="rgba(255, 255, 255, .1)"
                    strokeWidth="0"
                />
                <rect
                    id="RellenoGris"
                    x="0"
                    y="0"
                    width={baseSize}
                    height={baseSize}
                    rx={baseSize / 2}
                    ry={baseSize / 2}
                    shapeRendering="crispEdges"
                    fill="url(#Degradado_sin_nombre_47)"
                    strokeWidth="0"
                />
                <image
                    xlinkHref={imageSrc}
                    x={offset}
                    y={offset}
                    width={imageSize}
                    height={imageSize}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#roundImage)"
                />
                <path
                    id="Arcoiris"
                    d={`M${baseSize / 2},${baseSize * 0.017}h0c${baseSize * 0.266},0,${baseSize * 0.481},${baseSize * 0.215},${baseSize * 0.481},${baseSize * 0.481}h0c0,${baseSize * 0.266}-${baseSize * 0.215},${baseSize * 0.481}-${baseSize * 0.481},${baseSize * 0.481}h0C${baseSize * 0.233},${baseSize * 0.976},${baseSize * 0.017},${baseSize * 0.762},${baseSize * 0.017},${baseSize / 2}h0C${baseSize * 0.017},${baseSize * 0.233},${baseSize * 0.233},${baseSize * 0.017},${baseSize / 2},${baseSize * 0.017}Z`}
                    shapeRendering="crispEdges"
                    fill="none"
                    stroke="url(#Degradado_sin_nombre_48)"
                    strokeWidth={baseSize * 0.035}
                />
            </svg>
        </div>
    );
};

export default ICPBubble;
