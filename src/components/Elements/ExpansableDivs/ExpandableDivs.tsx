import React, { useEffect, useRef, useState } from 'react';

import AroLeft from '/assets/AroLeft.svg';
import AroRight from '/assets/AroRight.svg';

import { useMediaQuery } from 'react-responsive';

export interface ReceivedCellData {
    title: string;
    description: string;
    image: string;
}

interface ExpandableDivsProps {
    cells: [
        ReceivedCellData,
        ReceivedCellData,
        ReceivedCellData,
        ReceivedCellData,
        ReceivedCellData,
        ReceivedCellData
    ];
}

const ExpandableDivs: React.FC<ExpandableDivsProps> = ({ cells }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    const [selectedRow1, setSelectedRow1] = useState<number>(0);
    const [selectedRow2, setSelectedRow2] = useState<number>(0);

    const [visibleCells, setVisibleCells] = useState<boolean[]>(
        new Array(cells.length).fill(false)
    );

    const cellRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (isMobile) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const index = Number(entry.target.getAttribute('data-index'));
                        if (entry.isIntersecting) {
                            setVisibleCells((prev) => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.5 } // triggers when at least 50% visible
            );

            cellRefs.current.forEach((ref) => {
                if (ref) {
                    observer.observe(ref);
                }
            });
            return () => observer.disconnect();
        }
    }, [isMobile, cells.length]);

    const getCellStyle = (isSelected: boolean): React.CSSProperties => {

        const widthValue = isSelected ? '35vw' : '10vw';
        const clampedWidth = isSelected
            ? `clamp(200px, ${widthValue}, 1000px)`
            : `clamp(50px, ${widthValue}, 100px)`;

        return {
            background: 'rgba(71, 71, 71, 0.9)',
            borderRadius: '100px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'width 0.5s ease',
            overflow: 'hidden',
            height: '10vw',
            maxHeight: '100px',
            width: clampedWidth
        };
    };

    const getMobileCellStyle = (visible: boolean): React.CSSProperties => {
        const width = visible
            ? `clamp(200px, 75vw, 1000px)`
            : `clamp(50px, 10vw, 100px)`;
        return {
            background: '#474747',
            borderRadius: '100px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            minHeight: '85px',
            height: '18vw',
            maxHeight: '100px',
            width: width,
            transition: 'width 0.5s ease'
        };
    };

    const imageStyle: React.CSSProperties = {
        borderRadius: '50%',
        width: '10vw',
        maxWidth: '100px',
        maxHeight: '100px',
        height: '10vw',
        flexShrink: 0,
        marginRight: '10px'
    };

    const rowContainerStyle: React.CSSProperties = {
        display: 'flex',
        gap: '2vw',
        marginBottom: '20px'
    };

    const row1Data = cells.slice(0, 3);
    const row2Data = cells.slice(3, 6);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {!isMobile && (
                <img src={AroLeft} width={252} height={526} style={{ marginRight: '-133px' }} />
            )}
            <div style={{ zIndex: 1 }}>
                {isMobile ? (
                    // Mobile
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2vw', alignItems: 'center' }}>
                        {cells.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (cellRefs.current[index] = el)}
                                data-index={index}
                                style={getMobileCellStyle(visibleCells[index])}
                            >
                                <img src={item.image} alt={item.title} style={imageStyle} />
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', paddingRight: '1.15vw' }}>
                                    <h3 style={{ margin: '0', fontSize: 'clamp(15px,2vw,24px)' }}>{item.title}</h3>
                                    <p style={{ margin: '0', fontSize: 'clamp(11.5px,2vw,18px)', lineHeight: '1.25' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Desktop
                    <>
                        {/* First Row */}
                        <div style={rowContainerStyle}>
                            {row1Data.map((item, index) => {
                                const isSelected = index === selectedRow1;
                                return (
                                    <div
                                        key={index}
                                        style={getCellStyle(isSelected)}
                                        onClick={() => setSelectedRow1(index)}
                                    >
                                        <img src={item.image} alt={item.title} style={imageStyle} />
                                        {isSelected && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    textAlign: 'left',
                                                    paddingRight: '0.33vw'
                                                }}
                                            >
                                                <h3 style={{ margin: '0', fontSize: 'clamp(15px,1vw,24px)' }}>{item.title}</h3>
                                                <p style={{ margin: '0', fontSize: 'clamp(11.5px,0.85vw,16px)', lineHeight: '1.25' }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Second Row */}
                        <div style={rowContainerStyle}>
                            {row2Data.map((item, index) => {
                                const isSelected = index === selectedRow2;
                                return (
                                    <div
                                        key={index}
                                        style={getCellStyle(isSelected)}
                                        onClick={() => setSelectedRow2(index)}
                                    >
                                        <img src={item.image} alt={item.title} style={imageStyle} />
                                        {isSelected && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    textAlign: 'left',
                                                    paddingRight: '0.33vw'
                                                }}
                                            >
                                                <h3 style={{ margin: '0', fontSize: 'clamp(15px,1vw,24px)' }}>{item.title}</h3>
                                                <p style={{ margin: '0', fontSize: 'clamp(11.5px,0.85vw,16px)', lineHeight: '1.25' }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
            {!isMobile && (
                <img src={AroRight} alt="AroLeft" width={252} height={526} style={{ marginLeft: '-133px' }} />
            )}
        </div>
    );
};

export default ExpandableDivs;
