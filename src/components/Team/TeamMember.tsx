import React from 'react';
import './Team.css';

interface TeamMemberProps {
    image: string;
    icon: string;
    socialMediaHandle: string;
    socialMediaLink: string;
    description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
    image,
    icon,
    socialMediaHandle,
    socialMediaLink,
    description,
}) => {
    return (
        <div className="teamGroup">
            <div className="teamRow">
                <div
                    className="teamMember"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <a
                    href={socialMediaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="teamMember teamMemberAdd teamInfo"
                >
                    <span className="icon">
                        <img src={icon} alt="Social Media Icon" />
                    </span>
                    <span className="text">{socialMediaHandle}</span>
                </a>
            </div>
            <div className="teamDescription">
                <span className="text">{description}</span>
            </div>
        </div>
    );
};

export default TeamMember;
