// Stars.jsx
import React, { useEffect, useState } from 'react';
import styles from './Stars.module.scss';

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

    useEffect(() => {
        const generateStars = () => {
            const starCount = 100; // Total number of stars
            const gridSize = 33; // Minimum distance between stars in pixels
            const starsArray = [];
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const cols = Math.floor(windowWidth / gridSize);
            const rows = Math.floor(windowHeight / gridSize);

            const colors = ['#ffffff', '#f0f8ff', '#e0ffff', '#d8bfd8'];


            for (let i = 0; i < starCount; i++) {
                const col = Math.floor(Math.random() * cols);
                const row = Math.floor(Math.random() * rows);
                const key = `${col}-${row}-${i}`;

                // Calculate position within the grid cell with some randomness
                const left = (col * gridSize) + Math.random() * (gridSize - 10); // 10px padding
                const top = (row * gridSize) + Math.random() * (gridSize - 10);
                const color = colors[Math.floor(Math.random() * colors.length)];

                const clampedLeft = Math.min(left, windowWidth - 10);
                const clampedTop = Math.min(top, windowHeight - 10);

                starsArray.push({
                    id: key,
                    left: clampedLeft,
                    top: clampedTop,
                    animationDelay: `${Math.random() * 20}s`,
                    animationDuration: `${Math.random() * 5 + 5}s`,
                    opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                    scale: Math.random() * 0.5 + 0.5, // Scale between 0.5 and 1
                    color,
                });
            }

            setStars(starsArray);
        };

        generateStars();

        let resizeTimeout: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                generateStars();
            }, 500); // Debounce delay
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };

    }, []);

    return (
        <div className={styles.Stars}>
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
