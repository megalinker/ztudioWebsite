// Stars.jsx
import React, { useEffect, useState } from 'react';
import styles from './Stars.module.scss';
import { useMediaQuery } from 'react-responsive';

interface Star {
    id: string;
    left: number;
    top: number;
    animationDelay: string;
    animationDuration: string;
    opacity: number;
    scale: number;
    color?: string;
}

const Stars = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const [pageHeight, setPageHeight] = useState(window.innerHeight);
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    useEffect(() => {
        // Function to set current page height
        const updateHeight = () => {
            const appEl = document.querySelector('.App');
            if (!appEl) return;
            const height = appEl.scrollHeight;
            setPageHeight(height);
        };

        // Generate stars once
        const generateStars = () => {
            const starCount = isMobile ? 150 : 500;
            const gridSize = 33;
            const windowWidth = window.innerWidth;

            // Use our pageHeight instead of window.innerHeight
            const windowHeight = pageHeight;
            const cols = Math.floor(windowWidth / gridSize);
            const rows = Math.floor(windowHeight / gridSize);

            const colors = ['#ffffff', '#E14E87', '#E8B125', '#2BC9EC'];
            const newStars = [];

            for (let i = 0; i < starCount; i++) {
                const col = Math.floor(Math.random() * cols);
                const row = Math.floor(Math.random() * rows);

                const left = (col * gridSize) + Math.random() * (gridSize - 10);
                const top = (row * gridSize) + Math.random() * (gridSize - 10);

                newStars.push({
                    id: `${col}-${row}-${i}`,
                    left,
                    top,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    animationDelay: `${Math.random() * 20}s`,
                    animationDuration: `${Math.random() * 5 + 5}s`,
                    opacity: Math.random() * 0.5 + 0.5,
                    scale: Math.random() * 0.5 + 0.5,
                });
            }
            setStars(newStars);
        };

        // Generate once on mount + update page height
        updateHeight();
        generateStars();

        window.addEventListener('resize', updateHeight);
        window.addEventListener('scroll', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('scroll', updateHeight);
        };
    }, [pageHeight]);

    return (
        <div className={styles.Stars} style={{ height: pageHeight }}>
            {stars.map(star => (
                <div
                    key={star.id}
                    className={styles.Star}
                    style={{
                        left: star.left,
                        top: star.top,
                        animationDelay: star.animationDelay,
                        animationDuration: star.animationDuration,
                        opacity: star.opacity,
                        transform: `scale(${star.scale})`,
                        '--star-color': star.color,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
};

export default Stars;
