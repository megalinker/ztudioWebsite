import React from 'react';

const EllipseHorizontal: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 598.7 236.1"
        xmlSpace="preserve"
    >
        <defs>
            <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1={0.252}
                y1={94.537}
                x2={598.4}
                y2={94.537}
                gradientTransform="matrix(1 0 0 -1 0 238)"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "#e14e87",
                    }}
                />
                <stop
                    offset={0.5}
                    style={{
                        stopColor: "#e8b125",
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#2bc9ec",
                    }}
                />
            </linearGradient>
            <linearGradient
                id="b"
                gradientUnits="userSpaceOnUse"
                x1={299.33}
                y1={237.742}
                x2={299.33}
                y2={17.858}
                gradientTransform="matrix(1 0 0 -1 0 238)"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "#fff",
                        stopOpacity: 0.5,
                    }}
                />
                <stop
                    offset={0.5}
                    style={{
                        stopColor: "#000",
                        stopOpacity: 0,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#fff",
                        stopOpacity: 0.5,
                    }}
                />
            </linearGradient>
            <linearGradient
                id="c"
                gradientUnits="userSpaceOnUse"
                x1={-0.003}
                y1={127.8}
                x2={598.663}
                y2={127.8}
                gradientTransform="matrix(1 0 0 -1 0 238)"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "#e14e87",
                    }}
                />
                <stop
                    offset={0.5}
                    style={{
                        stopColor: "#e8b125",
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#2bc9ec",
                    }}
                />
            </linearGradient>
        </defs>

        <path
            style={{
                fill: "url(#a)",
            }}
            d="M297.2 220C133.4 216.7 1.3 165.8.3 105.8v14.6C-.9 181 132 232.8 297.2 236.1s300-43.2 301.2-103.9v-16c-1.4 60.6-136.2 107-301.2 103.8m227.5-86.3-.3.3c.1-.2.2-.2.3-.3m-449.8-8.4c-3.1-3-5.5-6-7-9.1C83 86 182.4 64.4 302 66.9c118.2 2.5 215 27.6 229.8 57.9-1.1 2.2-2.6 4.4-4.6 6.5 4.1-4.4 6.4-9.1 6.6-13.9 1.2-34-102.6-63.8-231.8-66.5S67.2 73.6 66 107.6c-.2 6.1 2.9 12 8.9 17.7m449.5 8.6c-.4.4-.9.8-1.4 1.2.5-.4 1-.8 1.4-1.2m1.3-1.2c-.3.3-.7.6-1 1zm1.3-1.3-1 1c.3-.3.7-.6 1-1m.2-.1-.2.2c.1-.1.1-.2.2-.2m-1.2 1.2-.3.3q.15-.3.3-.3m-428.8 7.1c2.6 1.2 5.3 2.4 8.2 3.6-2.8-1.2-5.6-2.4-8.2-3.6m0 0c-1.6-.8-3.2-1.5-4.7-2.3 1.6.7 3.1 1.5 4.7 2.3m-15.6-9q3.3 2.25 7.2 4.5-3.9-2.1-7.2-4.5m-6.7-5.3c1.9 1.8 4.2 3.6 6.7 5.4-2.5-1.8-4.7-3.6-6.7-5.4"
        />
        <path
            d="M301.5.4C136.3-2.8 1.5 43.7.3 104.3S132 216.7 297.2 220s300-43.2 301.2-103.9C599.6 55.5 466.7 3.7 301.5.4m-3.7 173.7c-129.2-2.7-233-32.5-231.8-66.5s106.8-59.5 236-56.8 232.9 32.5 231.8 66.5c-1.2 34.1-106.9 59.5-236 56.8"
            style={{
                fill: "#fff",
                fillOpacity: 0.1,
            }}
        />

        <path
            style={{
                fill: "url(#b)",
            }}
            d="M301.5.4C136.3-2.8 1.5 43.7.3 104.3S132 216.7 297.2 220s300-43.2 301.2-103.9C599.6 55.5 466.7 3.7 301.5.4m-3.7 173.7c-129.2-2.7-233-32.5-231.8-66.5s106.8-59.5 236-56.8 232.9 32.5 231.8 66.5c-1.2 34.1-106.9 59.5-236 56.8"
        />

        <path
            style={{
                fill: "none",
                stroke: "url(#c)",
                strokeWidth: 0.51,
                strokeMiterlimit: 10,
            }}
            d="M301.5.4C136.3-2.8 1.5 43.7.3 104.3S132 216.7 297.2 220s300-43.2 301.2-103.9C599.6 55.5 466.7 3.7 301.5.4zm-3.7 173.7c-129.2-2.7-233-32.5-231.8-66.5s106.8-59.5 236-56.8 232.9 32.5 231.8 66.5c-1.2 34.1-106.9 59.5-236 56.8z"
        />
    </svg>
);

export default EllipseHorizontal;
