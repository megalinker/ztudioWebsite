import React, { useEffect, useState } from 'react';
import './Home.css';
import AnimatedButtonComponent from '../Elements/AnimatedButtonComponent/AnimatedButtonComponent';
import Rings from '../Rings/Rings';

interface HomeProps {
    scrollToSection: (section: 'home' | 'why' | 'services' | 'team' | 'projects' | 'contact') => void;
}

const Home: React.FC<HomeProps> = ({ scrollToSection }) => {

    const fullText1 = "You name it,";
    const fullText2 = "we build it";
    const fullText3 = "Trusted by market leaders";

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");

    const typeText = (
        fullText: string,
        setText: React.Dispatch<React.SetStateAction<string>>,
        speed = 0
    ) => {
        return new Promise<void>((resolve) => {
            let index = 0;
            const interval = setInterval(() => {
                index++;
                setText(fullText.slice(0, index));
                if (index === fullText.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, speed);
        });
    };

    useEffect(() => {
        const startTypewriter = async () => {
            await typeText(fullText1, setText1, 75);
            await typeText(fullText2, setText2, 75);
            await typeText(fullText3, setText3, 75);
        };

        startTypewriter();
    }, []);

    return (
        <div className="home-container">
            <div className="home-text">
                <h1>{text1}</h1>
                <h1 className="home-pink">{text2}</h1>
                <p>{text3}</p>
                <div className="home-button-row">
                    <AnimatedButtonComponent
                    onClick={() => scrollToSection('contact')}
                    >
                        Contact Us
                    </AnimatedButtonComponent>

                    <button
                    className="submitButton"
                    onClick={() => window.open("https://calendly.com/capuzr/30-min", "_blank")}
                    >
                        Let’s have a call
                    </button>

                </div>
            </div>
            <div className="home-animated-component">
                <Rings />
            </div>
        </div>
    );
};

export default Home;