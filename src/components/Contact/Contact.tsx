import React, { useState } from 'react';
import './Contact.css';
import UserIcon from '/assets/contactFormIcons/userIcon.svg'
import MessageIcon from '/assets/contactFormIcons/messageIcon.svg'
import EmailIcon from '/assets/contactFormIcons/emailIcon.svg'
import XIcon from '/assets/SocialMediaIcons/XIcon.svg'
import EmailIconC from '/assets/SocialMediaIcons/EmailIconC.svg'
import TelegramIcon from '/assets/SocialMediaIcons/TelegramIcon.svg'
import ContactBg from '/assets/contactLines.svg'
import { useMediaQuery } from 'react-responsive';

const buttonOptions = [
    "Architecture & Concept",
    "Innovation/Ideation",
    "Grant Evaluation",
    "DFINITY Grant Proposal",
    "Whitepaper & Docs",
    "ICP/Web3 Development",
    "Other"
];

const Contact: React.FC = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    const [selectedButtons, setSelectedButtons] = useState<number[]>([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const toggleButton = (index: number) => {
        setSelectedButtons(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const isValidName = (name: string) => name.trim().length >= 3;
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidMessage = (message: string) => message.trim().length >= 10;

    const handleSubmit = () => {
        if (!isValidName(name)) {
            alert('Name must be at least 3 characters long.');
            return;
        }
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!isValidMessage(message)) {
            alert('Message must be at least 10 characters long.');
            return;
        }
        alert('Message submitted.');
    };

    return (
        <div className="contact-container" >
            <div className="contact-text">
                <h1>LET'S GET IN TOUCH</h1>
            </div>
            <div className="contact-buttons-grid">
                {buttonOptions.map((option, index) => (
                    <button
                        key={index}
                        className={`contact-button ${selectedButtons.includes(index) ? 'active' : ''}`}
                        onClick={() => toggleButton(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className="contact-inputs">
                <div className="input-group">
                    <div className={`input-icon ${isValidName(name) ? 'valid' : ''}`}>
                        <img src={UserIcon} alt="User Icon" className="iconC" />
                        {!isMobile && <span className="label-text">Name</span>}
                    </div>
                    <input type="text" placeholder="Enter your name..." value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-group">
                    <div className={`input-icon ${isValidEmail(email) ? 'valid' : ''}`}>
                        <img src={EmailIcon} alt="Email Icon" className="iconC" />
                        {!isMobile && <span className="label-text">E-mail</span>}
                    </div>
                    <input type="text" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <div className={`input-icon ${isValidMessage(message) ? 'valid' : ''}`}>
                        <img src={MessageIcon} alt="Message Icon" className="iconC" />
                        {!isMobile && <span className="label-text">Message</span>}
                    </div>
                    <textarea placeholder="Your message..." value={message} onChange={(e) => setMessage(e.target.value)}                    ></textarea>
                </div>

                <div className="or-divider">
                    <span className="line"></span>
                    <span className="or-text">or</span>
                    <span className="line"></span>
                </div>

                <div className="icon-row">
                    <a
                        href="https://www.linkedin.com/company/ztudioxyz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={XIcon} className="contactIcon" alt="Icon 1" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/ztudioxyz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={EmailIconC} className="contactIcon" alt="Icon 2" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/ztudioxyz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={TelegramIcon} className="contactIcon" alt="Icon 3" />
                    </a>
                </div>

                <button className="submitButton" onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Contact;