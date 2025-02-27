import React from 'react';

const RainbowCircle: React.FC = () => (
    <svg
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 80.08 80.08"
    >
        <defs>
            <linearGradient
                id="Degradado_sin_nombreCC"
                data-name="Degradado sin nombre"
                x1={0}
                y1={41.7}
                x2={80.08}
                y2={41.7}
                gradientTransform="translate(0 81.74) scale(1 -1)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0} stopColor="#e14492" />
                <stop offset={0.5} stopColor="#e8b125" />
                <stop offset={1} stopColor="#2bc9ec" />
            </linearGradient>
        </defs>
        <path
            id="BlancoBase"
            d="M40.04,79.95c22.04,0,39.91-17.87,39.91-39.91S62.08.13,40.04.13.13,18,.13,40.04s17.87,39.91,39.91,39.91Z"
            fill="#fff"
            strokeWidth={0}
        />
        <path
            id="Arcoiris"
            d="M40.01,80.08c-19.27,0-36.3-13.99-39.49-33.62-1.71-10.55.79-21.14,7.04-29.82C13.81,7.97,23.07,2.25,33.62.53c10.55-1.72,21.14.79,29.82,7.04,8.67,6.25,14.39,15.51,16.11,26.06,3.54,21.79-11.31,42.39-33.1,45.92-2.16.35-4.31.52-6.43.52h0ZM40.1,9.11c-1.67,0-3.34.13-5.02.41-8.16,1.32-15.31,5.74-20.14,12.45-4.83,6.7-6.76,14.89-5.44,23.04,2.73,16.84,18.65,28.31,35.49,25.58,16.84-2.73,28.31-18.65,25.58-35.49-1.32-8.16-5.74-15.31-12.45-20.14-5.32-3.84-11.58-5.85-18.02-5.85Z"
            fill="url(#Degradado_sin_nombreCC)"
            strokeWidth={0}
        />
    </svg>
);

export default RainbowCircle;
