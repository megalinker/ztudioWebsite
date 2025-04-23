import React from 'react';
import './Team.css';

import { Person } from '../../data/persons';

import xIcon from '/assets/SocialMediaIcons/XIcon.svg';
import linkedinIcon from '/assets/SocialMediaIcons/LinkedInLogo.svg';
import githubIcon from '/assets/SocialMediaIcons/GithubIcon.svg';

interface TeamProps {
    persons: Person[];
}

const Team: React.FC<TeamProps> = ({ persons }) => {
    return (
        <section className="team-section">
            <h1>TEAM</h1>
            <div className="team-container">
                {persons.map(person => (
                    <div key={person.id} className="team-card">
                        <img
                            src={person.imgSrc}
                            alt={person.name}
                            className="profile"
                        />
                        <div className="team-card-content">
                            <div className="header-row">
                                <h4>{person.name}</h4>
                                <h5>{person.subtitle}</h5>
                            </div>
                            <p className="description">{person.description}</p>
                            <div className="social-row">
                                {person.twitter && (
                                    <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                                        <img src={xIcon} alt="Twitter" />
                                    </a>
                                )}
                                {person.linkedin && (
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src={linkedinIcon} alt="LinkedIn" />
                                    </a>
                                )}
                                {person.github && (
                                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                                        <img src={githubIcon} alt="GitHub" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;