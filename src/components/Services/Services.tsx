import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const hoverTexts: { [key: string]: JSX.Element } = {
    Point1: (
        <>
            We transform your vision into a robust technical blueprint, aligning creative ideas with scalable ICP strategies. <br />Our comprehensive approach ensures every project is built on a solid, forward-thinking foundation.
        </>
    ),
    Point2: (
        <>
            Our collaborative sessions ignite breakthrough ideas and foster creative problem-solving. <br />We bring together diverse expertise to turn raw concepts into actionable web3 strategies.
        </>
    ),
    Point3: (
        <>
            We rigorously assess your grant proposals to highlight strengths and identify improvement areas. <br />Our expert insights refine your narrative to maximize funding potential and impact.
        </>
    ),
    Point4: (
        <>
            We specialize in crafting compelling grant proposals that showcase your project's innovation. <br />From structure to storytelling, our team ensures your application meets and exceeds review criteria.
        </>
    ),
    Point5: (
        <>
            Our whitepapers and technical documents clearly articulate your project's vision and technical framework. <br />We deliver authoritative content that resonates with both experts and investors alike.
        </>
    ),
    Point6: (
        <>
            Our custom ICP & Web3 solutions deliver secure, scalable development tailored to your vision.  <br />We ensure seamless integration that accelerates your digital innovation.
        </>
    ),
};

const exemptLineMapping: { [key: string]: string } = {
    Point1: "TopLineLeft",
    Point2: "MidLineLeft",
    Point3: "BotLineLeft",
    Point4: "TopLineRight",
    Point5: "MidLineRight",
    Point6: "BotLineRight",
};

const hoverImages: { [key: string]: string } = {
    Point1: "/images/point1.jpg",
    Point2: "/images/point2.jpg",
    Point3: "/images/point3.jpg",
    Point4: "/images/point4.jpg",
    Point5: "/images/point5.jpg",
    Point6: "/images/point6.jpg",
};

const servicesList = [
    {
        id: "Point1",
        title: "Strategic Architecture & Concept Design",
        description:
            "We transform your vision into a robust technical blueprint, aligning creative ideas with scalable ICP strategies. Our comprehensive approach ensures every project is built on a solid, forward-thinking foundation.",
    },
    {
        id: "Point2",
        title: "Innovation & Ideation Sessions",
        description:
            "Our collaborative sessions ignite breakthrough ideas and foster creative problem-solving. We bring together diverse expertise to turn raw concepts into actionable web3 strategies.",
    },
    {
        id: "Point3",
        title: "Grant Proposal Evaluation & Optimization",
        description:
            "We rigorously assess your grant proposals to highlight strengths and identify improvement areas. Our expert insights refine your narrative to maximize funding potential and impact.",
    },
    {
        id: "Point4",
        title: "DFINITY Grant Proposal Development",
        description:
            "We specialize in crafting compelling grant proposals that showcase your project's innovation. From structure to storytelling, our team ensures your application meets and exceeds review criteria.",
    },
    {
        id: "Point5",
        title: "Technical Whitepaper & Documentation Services",
        description:
            "Our whitepapers and technical documents clearly articulate your project's vision and technical framework. We deliver authoritative content that resonates with both experts and investors alike.",
    },
    {
        id: "Point6",
        title: "Bespoke ICP & Web3 Development Solutions",
        description:
            "Our custom ICP & Web3 solutions deliver secure, scalable development tailored to your vision. We ensure seamless integration that accelerates your digital innovation.",
    },
];

interface ServiceDropdownItemProps {
    title: string;
    description: string;
}

const ServiceDropdownItem: React.FC<ServiceDropdownItemProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const blocks = description.split("\n\n");

    return (
        <div style={{ borderBottom: '1px solid rgba(204,204,204,0.5)', padding: '15px 0' }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                style={{ cursor: 'pointer', fontWeight: 500, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7em' }}
            >
                {title}
                <span style={{ marginLeft: '10px', fontSize: '0.8em' }}>
                    {isOpen ? '▲' : '▼'}
                </span>
            </div>
            {isOpen && (
                <div style={{ marginTop: '10px', paddingLeft: '10px', lineHeight: 1.6, fontWeight: 300, textAlign: 'left', fontSize: '0.7em' }}>
                    {blocks.map((block, idx) => (
                        <p key={idx}>{block}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

const Services: React.FC = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);


    const handleMouseEnter = (pointId: string) => {
        setHoveredPoint(pointId);
    };

    const handleMouseLeave = () => {
        setHoveredPoint(null);
    };

    const getPointStyle = (pointId: string) => ({
        opacity: hoveredPoint && hoveredPoint !== pointId ? 0.3 : 1,
        transition: 'opacity 0.3s ease',
        cursor: 'pointer',
    });

    const getLineStyle = (lineId: string) => {
        if (!hoveredPoint) return { opacity: 1, transition: 'opacity 0.3s ease' };
        const exempt = exemptLineMapping[hoveredPoint];
        return {
            opacity: lineId === exempt ? 1 : 0.3,
            transition: 'opacity 0.3s ease',
        };
    };

    return (
        <div style={{ padding: '0 2rem' }}>
            {!isMobile && (
                <svg
                    id="Capa_1"
                    data-name="Capa 1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1328 250"
                >
                    <defs>
                        <linearGradient
                            id="Degradado_sin_nombre_4S"
                            data-name="Degradado sin nombre 4"
                            x1={384}
                            y1={125}
                            x2={546}
                            y2={125}
                            gradientTransform="translate(0 252) scale(1 -1)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#e14e87" />
                            <stop offset={0.5} stopColor="#e8b125" />
                            <stop offset={1} stopColor="#2bc9ec" />
                        </linearGradient>
                        <linearGradient
                            id="Degradado_sin_nombre_5S"
                            data-name="Degradado sin nombre 5"
                            x1={383}
                            y1={165}
                            x2={546}
                            y2={165}
                            gradientTransform="translate(0 252) scale(1 -1)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#e14e87" />
                            <stop offset={0.5} stopColor="#e8b125" />
                            <stop offset={1} stopColor="#2bc9ec" />
                        </linearGradient>
                        <linearGradient
                            id="Degradado_sin_nombre_6S"
                            data-name="Degradado sin nombre 6"
                            x1={383}
                            y1={85}
                            x2={546}
                            y2={85}
                            gradientTransform="translate(0 252) scale(1 -1)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#e14e87" />
                            <stop offset={0.5} stopColor="#e8b125" />
                            <stop offset={1} stopColor="#2bc9ec" />
                        </linearGradient>
                        <mask
                            id="mask"
                            x={294}
                            y={5}
                            width={122}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g id="path-25-inside-7_2126_786" data-name="path-25-inside-7 2126 786">
                                <path
                                    d="M294,7h80c22.09,0,40,17.91,40,40s-17.91,40-40,40h-80V7Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-1"
                            x={0}
                            y={5}
                            width={342}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g id="path-28-inside-8_2126_786" data-name="path-28-inside-8 2126 786">
                                <path
                                    d="M0,7h300c22.09,0,40,17.91,40,40s-17.91,40-40,40H0V7Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-2"
                            x={294}
                            y={85}
                            width={122}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g id="path-31-inside-9_2126_786" data-name="path-31-inside-9 2126 786">
                                <path
                                    d="M294,87h80c22.09,0,40,17.91,40,40s-17.91,40-40,40h-80v-80Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-3"
                            x={0}
                            y={85}
                            width={342}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g
                                id="path-34-inside-10_2126_786"
                                data-name="path-34-inside-10 2126 786"
                            >
                                <path
                                    d="M0,87h300c22.09,0,40,17.91,40,40s-17.91,40-40,40H0v-80Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-4"
                            x={294}
                            y={165}
                            width={122}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g
                                id="path-37-inside-11_2126_786"
                                data-name="path-37-inside-11 2126 786"
                            >
                                <path
                                    d="M294,167h80c22.09,0,40,17.91,40,40s-17.91,40-40,40h-80v-80Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-5"
                            x={0}
                            y={165}
                            width={342}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g
                                id="path-40-inside-12_2126_786"
                                data-name="path-40-inside-12 2126 786"
                            >
                                <path
                                    d="M0,167h300c22.09,0,40,17.91,40,40s-17.91,40-40,40H0v-80Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <linearGradient
                            id="Degradado_sin_nombreS"
                            data-name="Degradado sin nombre"
                            x1={788}
                            y1={125}
                            x2={944}
                            y2={125}
                            gradientTransform="translate(0 252) scale(1 -1)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#2bc9ec" />
                            <stop offset={0.5} stopColor="#e8b125" />
                            <stop offset={1} stopColor="#e14e87" />
                        </linearGradient>
                        <linearGradient
                            id="Degradado_sin_nombre_2S"
                            data-name="Degradado sin nombre 2"
                            x1={944}
                            y1={85}
                            x2={782}
                            y2={85}
                            gradientTransform="translate(0 252) scale(1 -1)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#e14e87" />
                            <stop offset={0.5} stopColor="#e8b125" />
                            <stop offset={1} stopColor="#2bc9ec" />
                        </linearGradient>
                        <linearGradient
                            id="Degradado_sin_nombre_3S"
                            data-name="Degradado sin nombre 3"
                            x1={944}
                            y1={165}
                            x2={782}
                            y2={165}
                            gradientTransform="translate(0 252) scale(1 -1)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset={0} stopColor="#e14e87" />
                            <stop offset={0.5} stopColor="#e8b125" />
                            <stop offset={1} stopColor="#2bc9ec" />
                        </linearGradient>
                        <mask
                            id="mask-6"
                            x={912}
                            y={5}
                            width={122}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g id="path-4-inside-1_2126_786" data-name="path-4-inside-1 2126 786">
                                <path
                                    d="M1034,7h-80c-22.09,0-40,17.91-40,40s17.91,40,40,40h80V7Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-7"
                            x={986}
                            y={5}
                            width={342}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g id="path-7-inside-2_2126_786" data-name="path-7-inside-2 2126 786">
                                <path
                                    d="M1328,7h-300c-22.09,0-40,17.91-40,40s17.91,40,40,40h300V7Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-8"
                            x={912}
                            y={85}
                            width={122}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g id="path-10-inside-3_2126_786" data-name="path-10-inside-3 2126 786">
                                <path
                                    d="M1034,87h-80c-22.09,0-40,17.91-40,40s17.91,40,40,40h80v-80Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-9"
                            x={986}
                            y={85}
                            width={342}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g id="path-13-inside-4_2126_786" data-name="path-13-inside-4 2126 786">
                                <path
                                    d="M1328,87h-300c-22.09,0-40,17.91-40,40s17.91,40,40,40h300v-80Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-10"
                            x={912}
                            y={165}
                            width={122}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g id="path-16-inside-5_2126_786" data-name="path-16-inside-5 2126 786">
                                <path
                                    d="M1034,167h-80c-22.09,0-40,17.91-40,40s17.91,40,40,40h80v-80Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <mask
                            id="mask-11"
                            x={986}
                            y={165}
                            width={342}
                            height={84}
                            maskUnits="userSpaceOnUse"
                        >
                            <g id="path-19-inside-6_2126_786" data-name="path-19-inside-6 2126 786">
                                <path
                                    d="M1328,167h-300c-22.09,0-40,17.91-40,40s17.91,40,40,40h300v-80Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </mask>
                        <clipPath id="midCircleClip">
                            <use xlinkHref="#GrayCircle" />
                        </clipPath>
                    </defs>
                    <g id="LeftRainbow">
                        <path
                            id="MidLineLeft"
                            d="M384,127h162"
                            fill="none"
                            stroke="url(#Degradado_sin_nombre_4S)"
                            strokeWidth={2}
                            style={getLineStyle("MidLineLeft")}
                        />
                        <path
                            id="TopLineLeft"
                            d="M546,127h-10.85c-22.09,0-40-17.91-40-40h0c0-22.09-17.91-40-40-40h-72.15"
                            fill="none"
                            stroke="url(#Degradado_sin_nombre_5S)"
                            strokeWidth={2}
                            style={getLineStyle("TopLineLeft")}
                        />
                        <path
                            id="BotLineLeft"
                            d="M546,127h-10.85c-22.09,0-40,17.91-40,40h0c0,22.09-17.91,40-40,40h-72.15"
                            fill="none"
                            stroke="url(#Degradado_sin_nombre_6S)"
                            strokeWidth={2}
                            style={getLineStyle("BotLineLeft")}
                        />
                    </g>
                    <g
                        id="Point1"
                        style={getPointStyle("Point1")}
                    >
                        <g mask="url(#mask)">
                            <path
                                id="ShortCircle1"
                                d="M294,5h80c23.2,0,42,18.8,42,42h-4c0-20.99-17.01-38-38-38h-80v-4ZM416,47c0,23.2-18.8,42-42,42h-80v-4h80c20.99,0,38-17.01,38-38h4ZM374,5c23.2,0,42,18.8,42,42s-18.8,42-42,42v-4c20.99,0,38-17.01,38-38s-17.01-38-38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <circle
                            id="Dot1"
                            cx={374}
                            cy={47}
                            r={10}
                            fill="#d9d9d9"
                            strokeWidth={0}
                        />
                        <g mask="url(#mask-1)">
                            <path
                                id="LongCircle1"
                                d="M0,5h300c23.2,0,42,18.8,42,42h-4c0-20.99-17.01-38-38-38H0v-4ZM342,47c0,23.2-18.8,42-42,42H0v-4h300c20.99,0,38-17.01,38-38h4ZM300,5c23.2,0,42,18.8,42,42s-18.8,42-42,42v-4c20.99,0,38-17.01,38-38s-17.01-38-38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <g id="StrategicArchitecture">
                            <text
                                x="50"
                                y="42"
                                fill="#fff"
                                fontSize="22"
                                textAnchor="middle"
                            >
                                <tspan x="160" dy="0">Strategic Architecture</tspan>
                                <tspan x="160" dy="1.2em">& Concept Design</tspan>
                            </text>
                        </g>
                    </g>
                    <g
                        id="Point2"
                        style={getPointStyle("Point2")}
                    >
                        <g mask="url(#mask-2)">
                            <path
                                id="ShortCircle2"
                                d="M294,85h80c23.2,0,42,18.8,42,42h-4c0-20.99-17.01-38-38-38h-80v-4ZM416,127c0,23.2-18.8,42-42,42h-80v-4h80c20.99,0,38-17.01,38-38h4ZM374,85c23.2,0,42,18.8,42,42s-18.8,42-42,42v-4c20.99,0,38-17.01,38-38s-17.01-38-38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <circle
                            id="Dot2"
                            cx={374}
                            cy={127}
                            r={10}
                            fill="#d9d9d9"
                            strokeWidth={0}
                        />
                        <g mask="url(#mask-3)">
                            <path
                                id="LongCircle2"
                                d="M0,85h300c23.2,0,42,18.8,42,42h-4c0-20.99-17.01-38-38-38H0v-4ZM342,127c0,23.2-18.8,42-42,42H0v-4h300c20.99,0,38-17.01,38-38h4ZM300,85c23.2,0,42,18.8,42,42s-18.8,42-42,42v-4c20.99,0,38-17.01,38-38s-17.01-38-38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <g id="InnovationIdeation">
                            <text
                                x="100"
                                y="121"
                                fill="#fff"
                                fontSize="22"
                                textAnchor="middle"
                            >
                                <tspan x="160" dy="0">Innovation & Ideation</tspan>
                                <tspan x="160" dy="1.2em">Sessions</tspan>
                            </text>
                        </g>
                    </g>
                    <g
                        id="Point3"
                        style={getPointStyle("Point3")}
                    >
                        <g mask="url(#mask-4)">
                            <path
                                id="ShortCircle3"
                                d="M294,165h80c23.2,0,42,18.8,42,42h-4c0-20.99-17.01-38-38-38h-80v-4ZM416,207c0,23.2-18.8,42-42,42h-80v-4h80c20.99,0,38-17.01,38-38h4ZM374,165c23.2,0,42,18.8,42,42s-18.8,42-42,42v-4c20.99,0,38-17.01,38-38s-17.01-38-38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <circle
                            id="Dot3"
                            cx={374}
                            cy={207}
                            r={10}
                            fill="#d9d9d9"
                            strokeWidth={0}
                        />
                        <g mask="url(#mask-5)">
                            <path
                                id="LongCircle3"
                                d="M0,165h300c23.2,0,42,18.8,42,42h-4c0-20.99-17.01-38-38-38H0v-4ZM342,207c0,23.2-18.8,42-42,42H0v-4h300c20.99,0,38-17.01,38-38h4ZM300,165c23.2,0,42,18.8,42,42s-18.8,42-42,42v-4c20.99,0,38-17.01,38-38s-17.01-38-38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <g id="GrantProposal">
                            <text
                                x="100"
                                y="200"
                                fill="#fff"
                                fontSize="22"
                                textAnchor="middle"
                            >
                                <tspan x="160" dy="0">Grant Proposal Evaluation</tspan>
                                <tspan x="160" dy="1.2em">& Optimization</tspan>
                            </text>
                        </g>
                    </g>
                    <g id="RightRainbow">
                        <path
                            id="MidLineRight"
                            d="M788,127h156"
                            fill="none"
                            stroke="url(#Degradado_sin_nombreS)"
                            strokeWidth={2}
                            style={getLineStyle("MidLineRight")}
                        />
                        <path
                            id="BotLineRight"
                            d="M782,127h10.54c22.09,0,40,17.91,40,40h0c0,22.09,17.91,40,40,40h71.46"
                            fill="none"
                            stroke="url(#Degradado_sin_nombre_2S)"
                            strokeWidth={2}
                            style={getLineStyle("BotLineRight")}
                        />
                        <path
                            id="TopLineRight"
                            d="M782,127h10.54c22.09,0,40-17.91,40-40h0c0-22.09,17.91-40,40-40h71.46"
                            fill="none"
                            stroke="url(#Degradado_sin_nombre_3S)"
                            strokeWidth={2}
                            style={getLineStyle("TopLineRight")}
                        />
                    </g>
                    <g
                        id="Point4"
                        style={getPointStyle("Point4")}
                    >
                        <g mask="url(#mask-6)">
                            <path
                                id="ShortCircle4"
                                d="M1034,5h-80c-23.2,0-42,18.8-42,42h4c0-20.99,17.01-38,38-38h80v-4ZM912,47c0,23.2,18.8,42,42,42h80v-4h-80c-20.99,0-38-17.01-38-38h-4ZM954,5c-23.2,0-42,18.8-42,42s18.8,42,42,42v-4c-20.99,0-38-17.01-38-38s17.01-38,38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <circle
                            id="Dot4"
                            cx={954}
                            cy={47}
                            r={10}
                            fill="#d9d9d9"
                            strokeWidth={0}
                        />
                        <g mask="url(#mask-7)">
                            <path
                                id="LongCircle4"
                                d="M1328,5h-300c-23.2,0-42,18.8-42,42h4c0-20.99,17.01-38,38-38h300v-4ZM986,47c0,23.2,18.8,42,42,42h300v-4h-300c-20.99,0-38-17.01-38-38h-4ZM1028,5c-23.2,0-42,18.8-42,42s18.8,42,42,42v-4c-20.99,0-38-17.01-38-38s17.01-38,38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <g id="DFINITY_Grant_Proposal" data-name="DFINITY Grant Proposal">
                            <text
                                x="100"
                                y="42"
                                fill="#fff"
                                fontSize="22"
                                textAnchor="middle"
                            >
                                <tspan x="1175" dy="0">DFINITY Grant Proposal</tspan>
                                <tspan x="1175" dy="1.2em">Development</tspan>
                            </text>
                        </g>
                    </g>
                    <g
                        id="Point5"
                        style={getPointStyle("Point5")}
                    >
                        <g mask="url(#mask-8)">
                            <path
                                id="ShortCircle5"
                                d="M1034,85h-80c-23.2,0-42,18.8-42,42h4c0-20.99,17.01-38,38-38h80v-4ZM912,127c0,23.2,18.8,42,42,42h80v-4h-80c-20.99,0-38-17.01-38-38h-4ZM954,85c-23.2,0-42,18.8-42,42s18.8,42,42,42v-4c-20.99,0-38-17.01-38-38s17.01-38,38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <circle
                            id="Dot5"
                            cx={954}
                            cy={127}
                            r={10}
                            fill="#d9d9d9"
                            strokeWidth={0}
                        />
                        <g mask="url(#mask-9)">
                            <path
                                id="LongCircle5"
                                d="M1328,85h-300c-23.2,0-42,18.8-42,42h4c0-20.99,17.01-38,38-38h300v-4ZM986,127c0,23.2,18.8,42,42,42h300v-4h-300c-20.99,0-38-17.01-38-38h-4ZM1028,85c-23.2,0-42,18.8-42,42s18.8,42,42,42v-4c-20.99,0-38-17.01-38-38s17.01-38,38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <g id="TechnicalWhitepaper">
                            <text
                                x="100"
                                y="121"
                                fill="#fff"
                                fontSize="22"
                                textAnchor="middle"
                            >
                                <tspan x="1175" dy="0">Technical Whitepaper &</tspan>
                                <tspan x="1175" dy="1.2em">Documentation Services</tspan>
                            </text>
                        </g>
                    </g>
                    <g
                        id="Point6"
                        style={getPointStyle("Point6")}
                    >
                        <g mask="url(#mask-10)">
                            <path
                                id="ShortCircle6"
                                d="M1034,165h-80c-23.2,0-42,18.8-42,42h4c0-20.99,17.01-38,38-38h80v-4ZM912,207c0,23.2,18.8,42,42,42h80v-4h-80c-20.99,0-38-17.01-38-38h-4ZM954,165c-23.2,0-42,18.8-42,42s18.8,42,42,42v-4c-20.99,0-38-17.01-38-38s17.01-38,38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <circle
                            id="Dot6"
                            cx={954}
                            cy={207}
                            r={10}
                            fill="#d9d9d9"
                            strokeWidth={0}
                        />
                        <g mask="url(#mask-11)">
                            <path
                                id="LongCircle6"
                                d="M1328,165h-300c-23.2,0-42,18.8-42,42h4c0-20.99,17.01-38,38-38h300v-4ZM986,207c0,23.2,18.8,42,42,42h300v-4h-300c-20.99,0-38-17.01-38-38h-4ZM1028,165c-23.2,0-42,18.8-42,42s18.8,42,42,42v-4c-20.99,0-38-17.01-38-38s17.01-38,38-38v-4Z"
                                fill="#fff"
                                strokeWidth={0}
                            />
                        </g>
                        <g id="BespokeICP">
                            <text
                                x="100"
                                y="200"
                                fill="#fff"
                                fontSize="22"
                                textAnchor="middle"
                            >
                                <tspan x="1175" dy="0">Bespoke ICP & Web3</tspan>
                                <tspan x="1175" dy="1.2em">Development Solutions</tspan>
                            </text>
                        </g>
                    </g>
                    <g id="MidCircle">
                        <path
                            id="GrayCircle"
                            d="M664,0h0c69.04,0,125,55.96,125,125h0c0,69.04-55.96,125-125,125h0c-69.04,0-125-55.96-125-125h0c0-69.04,55.96-125,125-125Z"
                            fill="#222"
                            strokeWidth={0}
                        />
                        <path
                            id="Services"
                            d="M605.54,136.48c-1.76,0-3.46-.2-5.1-.6-1.64-.4-2.99-.92-4.05-1.56l2.28-5.16c1,.58,2.11,1.05,3.33,1.41,1.24.34,2.44.51,3.6.51.68,0,1.21-.04,1.59-.12.4-.1.69-.23.87-.39.18-.18.27-.39.27-.63,0-.38-.21-.68-.63-.9-.42-.22-.98-.4-1.68-.54-.68-.16-1.43-.32-2.25-.48-.82-.18-1.65-.41-2.49-.69-.82-.28-1.58-.65-2.28-1.11-.68-.46-1.23-1.06-1.65-1.8-.42-.76-.63-1.7-.63-2.82,0-1.3.36-2.48,1.08-3.54.74-1.08,1.83-1.94,3.27-2.58,1.46-.64,3.27-.96,5.43-.96,1.42,0,2.82.15,4.2.45,1.38.3,2.62.76,3.72,1.38l-2.13,5.13c-1.04-.52-2.05-.91-3.03-1.17-.96-.26-1.9-.39-2.82-.39-.68,0-1.22.06-1.62.18-.4.12-.69.28-.87.48-.16.2-.24.42-.24.66,0,.36.21.65.63.87.42.2.97.37,1.65.51.7.14,1.46.29,2.28.45.84.16,1.67.38,2.49.66.82.28,1.57.65,2.25,1.11.7.46,1.26,1.06,1.68,1.8s.63,1.66.63,2.76c0,1.28-.37,2.46-1.11,3.54-.72,1.06-1.8,1.92-3.24,2.58-1.44.64-3.25.96-5.43.96ZM626.16,136.3c-2,0-3.75-.37-5.25-1.11-1.48-.74-2.63-1.75-3.45-3.03-.82-1.3-1.23-2.76-1.23-4.38s.4-3.13,1.2-4.41c.82-1.28,1.93-2.28,3.33-3,1.42-.72,3.01-1.08,4.77-1.08,1.62,0,3.11.32,4.47.96,1.38.64,2.48,1.59,3.3,2.85.84,1.26,1.26,2.82,1.26,4.68,0,.24-.01.51-.03.81-.02.28-.04.54-.06.78h-12.63v-3.27h9.03l-2.55.87c0-.64-.12-1.18-.36-1.62-.22-.46-.53-.81-.93-1.05-.4-.26-.88-.39-1.44-.39s-1.05.13-1.47.39c-.4.24-.71.59-.93,1.05-.22.44-.33.98-.33,1.62v1.02c0,.7.14,1.3.42,1.8.28.5.68.88,1.2,1.14.52.24,1.15.36,1.89.36s1.38-.1,1.86-.3c.5-.2,1.02-.5,1.56-.9l3.54,3.57c-.8.86-1.79,1.52-2.97,1.98-1.16.44-2.56.66-4.2.66ZM636.58,136v-16.41h6.45v4.95l-1.05-1.41c.5-1.28,1.3-2.24,2.4-2.88,1.1-.64,2.42-.96,3.96-.96v6c-.3-.04-.57-.07-.81-.09-.22-.02-.45-.03-.69-.03-1.02,0-1.86.27-2.52.81-.64.52-.96,1.43-.96,2.73v7.29h-6.78ZM655.23,136l-6.6-16.41h6.96l5.01,13.32h-3.51l5.34-13.32h6.42l-6.6,16.41h-7.02ZM669.76,136v-16.41h6.78v16.41h-6.78ZM673.15,118.27c-1.24,0-2.23-.33-2.97-.99-.74-.66-1.11-1.48-1.11-2.46s.37-1.8,1.11-2.46c.74-.66,1.73-.99,2.97-.99s2.23.31,2.97.93c.74.62,1.11,1.42,1.11,2.4,0,1.04-.37,1.9-1.11,2.58-.74.66-1.73.99-2.97.99ZM688.25,136.3c-1.88,0-3.55-.36-5.01-1.08-1.46-.72-2.61-1.72-3.45-3-.82-1.3-1.23-2.78-1.23-4.44s.41-3.13,1.23-4.41c.84-1.28,1.99-2.28,3.45-3,1.46-.72,3.13-1.08,5.01-1.08,2,0,3.71.43,5.13,1.29,1.42.86,2.4,2.05,2.94,3.57l-5.25,2.58c-.34-.76-.76-1.31-1.26-1.65-.48-.34-1.01-.51-1.59-.51-.5,0-.97.12-1.41.36-.42.24-.76.6-1.02,1.08-.24.46-.36,1.05-.36,1.77s.12,1.32.36,1.8c.26.48.6.84,1.02,1.08.44.24.91.36,1.41.36.58,0,1.11-.17,1.59-.51.5-.34.92-.89,1.26-1.65l5.25,2.58c-.54,1.52-1.52,2.71-2.94,3.57-1.42.86-3.13,1.29-5.13,1.29ZM706.68,136.3c-2,0-3.75-.37-5.25-1.11-1.48-.74-2.63-1.75-3.45-3.03-.82-1.3-1.23-2.76-1.23-4.38s.4-3.13,1.2-4.41c.82-1.28,1.93-2.28,3.33-3,1.42-.72,3.01-1.08,4.77-1.08,1.62,0,3.11.32,4.47.96,1.38.64,2.48,1.59,3.3,2.85.84,1.26,1.26,2.82,1.26,4.68,0,.24-.01.51-.03.81-.02.28-.04.54-.06.78h-12.63v-3.27h9.03l-2.55.87c0-.64-.12-1.18-.36-1.62-.22-.46-.53-.81-.93-1.05-.4-.26-.88-.39-1.44-.39s-1.05.13-1.47.39c-.4.24-.71.59-.93,1.05-.22.44-.33.98-.33,1.62v1.02c0,.7.14,1.3.42,1.8.28.5.68.88,1.2,1.14.52.24,1.15.36,1.89.36s1.38-.1,1.86-.3c.5-.2,1.02-.5,1.56-.9l3.54,3.57c-.8.86-1.79,1.52-2.97,1.98-1.16.44-2.56.66-4.2.66ZM723.52,136.3c-1.4,0-2.78-.15-4.14-.45-1.36-.3-2.46-.69-3.3-1.17l1.86-4.47c.78.46,1.68.82,2.7,1.08,1.04.26,2.05.39,3.03.39.82,0,1.37-.07,1.65-.21.3-.14.45-.33.45-.57s-.17-.41-.51-.51c-.34-.12-.79-.21-1.35-.27s-1.18-.13-1.86-.21c-.66-.1-1.33-.24-2.01-.42-.68-.18-1.3-.45-1.86-.81-.56-.36-1.01-.84-1.35-1.44-.34-.62-.51-1.4-.51-2.34,0-1.04.31-1.98.93-2.82.64-.84,1.58-1.51,2.82-2.01,1.26-.52,2.81-.78,4.65-.78,1.2,0,2.4.11,3.6.33,1.2.22,2.23.56,3.09,1.02l-1.86,4.47c-.84-.46-1.67-.77-2.49-.93-.8-.18-1.55-.27-2.25-.27-.86,0-1.45.08-1.77.24-.3.16-.45.34-.45.54,0,.24.17.42.51.54.34.12.79.21,1.35.27s1.17.14,1.83.24c.68.08,1.35.22,2.01.42.68.18,1.3.45,1.86.81s1.01.85,1.35,1.47c.34.6.51,1.37.51,2.31s-.31,1.9-.93,2.76c-.62.84-1.56,1.52-2.82,2.04-1.26.5-2.84.75-4.74.75Z"
                            fill="#fff"
                            strokeWidth={0}
                        />

                        <image
                            x="539"
                            y="0"
                            width="250"
                            height="250"
                            href={hoveredPoint ? hoverImages[hoveredPoint] : "/images/default.jpg"}
                            clipPath="url(#midCircleClip)"
                            style={{ opacity: hoveredPoint ? 1 : 0, transition: 'opacity 0.3s ease' }}
                        />
                    </g>
                    <g id="Capa_2" data-name="Capa 2">
                        <path
                            id="Shape1Der"
                            onMouseEnter={() => handleMouseEnter("Point4")}
                            onMouseLeave={handleMouseLeave}
                            style={{ pointerEvents: 'all', cursor: 'pointer' }}
                            d="M954.1,7.04h373.9v79.96h-373.9c-22.01,0-39.88-17.87-39.88-39.88v-.21c0-22.01,17.87-39.88,39.88-39.88Z"
                            fill="none"
                            strokeWidth={0}
                        />
                        <path
                            id="Shape2Der"
                            onMouseEnter={() => handleMouseEnter("Point5")}
                            onMouseLeave={handleMouseLeave}
                            style={{ pointerEvents: 'all', cursor: 'pointer' }}
                            d="M954.1,87.04h373.9v79.96h-373.9c-22.01,0-39.88-17.87-39.88-39.88v-.21c0-22.01,17.87-39.88,39.88-39.88Z"
                            fill="none"
                            strokeWidth={0}
                        />
                        <path
                            id="Shape3Der"
                            onMouseEnter={() => handleMouseEnter("Point6")}
                            onMouseLeave={handleMouseLeave}
                            style={{ pointerEvents: 'all', cursor: 'pointer' }}
                            d="M954.1,167.04h373.9v79.96h-373.9c-22.01,0-39.88-17.87-39.88-39.88v-.21c0-22.01,17.87-39.88,39.88-39.88Z"
                            fill="none"
                            strokeWidth={0}
                        />
                        <path
                            id="Shape1Izq"
                            onMouseEnter={() => handleMouseEnter("Point1")}
                            onMouseLeave={handleMouseLeave}
                            style={{ pointerEvents: 'all', cursor: 'pointer' }}
                            d="M40.1,7.04h373.9v79.96H40.1C18.09,87,.22,69.13.22,47.12v-.21C.22,24.9,18.09,7.04,40.1,7.04Z"
                            transform="translate(414.22 94.04) rotate(-180)"
                            fill="none"
                            strokeWidth={0}
                        />
                        <path
                            id="Shape2Izq"
                            onMouseEnter={() => handleMouseEnter("Point2")}
                            onMouseLeave={handleMouseLeave}
                            style={{ pointerEvents: 'all', cursor: 'pointer' }}
                            d="M40.1,87.04h373.9v79.96H40.1C18.09,167,.22,149.13.22,127.12v-.21c0-22.01,17.87-39.88,39.88-39.88Z"
                            transform="translate(414.22 254.04) rotate(-180)"
                            fill="none"
                            strokeWidth={0}
                        />
                        <path
                            id="Shape3Izq"
                            onMouseEnter={() => handleMouseEnter("Point3")}
                            onMouseLeave={handleMouseLeave}
                            style={{ pointerEvents: 'all', cursor: 'pointer' }}
                            d="M40.1,167.04h373.9v79.96H40.1C18.09,247,.22,229.13.22,207.12v-.21c0-22.01,17.87-39.88,39.88-39.88Z"
                            transform="translate(414.22 414.04) rotate(-180)"
                            fill="none"
                            strokeWidth={0}
                        />
                    </g>
                </svg>
            )}
            {!isMobile && (
                <div
                    className="hover-text"
                    style={{
                        transition: 'opacity 0.3s ease',
                        marginTop: '50px',
                        textAlign: 'center',
                        fontSize: '20px',
                        color: '#fff',
                    }}
                >
                    {hoveredPoint ? (
                        hoverTexts[hoveredPoint]
                    ) : (
                        <>
                            Every project is an opportunity to innovate and exceed expectations; <br />
                            we deliver transformative solutions while building enduring partnerships.
                        </>
                    )}
                </div>
            )}
            {isMobile && (
                <>
                    <h1 style={{ fontWeight: 800, fontSize: "clamp(35px, 3.25vw, 90px)", marginTop: "clamp(25px, 2vw, 50px)" }}>
                        SERVICES
                    </h1>
                    <div
                        className="hover-text"
                        style={{
                            transition: 'opacity 0.3s ease',
                            marginTop: '50px',
                            textAlign: 'center',
                            fontSize: '16px',
                            color: '#fff',
                        }}
                    >
                        Every project is an opportunity to innovate and exceed expectations;
                        we deliver transformative solutions while building enduring partnerships.
                    </div>
                    <div className="services-dropdown" style={{ marginTop: '30px' }}>
                        {servicesList.map((service) => (
                            <ServiceDropdownItem
                                key={service.id}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Services;
