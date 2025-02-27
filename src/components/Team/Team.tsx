import React from 'react';
import './Team.css';
import RicardoButtonImage from '/assets/ICPeople/RicardoButtonImage.webp'
import SagarButtonImage from '/assets/ICPeople/SagarButtonImage.webp'
import XIcon from '/assets/SocialMediaIcons/XIcon.svg'
import TeamMember from './TeamMember';

const developersData = [
    {
        image: RicardoButtonImage,
        icon: XIcon,
        socialMediaHandle: '@capuzr',
        socialMediaLink: 'https://x.com/capuzr',
        description:
            'Ricardo Ricardo Ricardo',
    },
    {
        image: SagarButtonImage,
        icon: XIcon,
        socialMediaHandle: '@sagar',
        socialMediaLink: 'https://x.com/sagar',
        description:
            'Sagar Sagar Sagar',
    },
    {
        image: RicardoButtonImage,
        icon: XIcon,
        socialMediaHandle: '@megalinker',
        socialMediaLink: 'https://x.com/dmegalinker',
        description:
            'Jesus Jesus Jesus Jesus Jesus Jesus Jesus Jesus Jesus Jesus Jesus Jesus',
    },
    {
        image: SagarButtonImage,
        icon: XIcon,
        socialMediaHandle: '@darshan',
        socialMediaLink: 'https://x.com/darshan',
        description:
            'Darshan Darshan Darshan',
    },
];

const designersData = [
    {
        image: RicardoButtonImage,
        icon: XIcon,
        socialMediaHandle: '@dgranado',
        socialMediaLink: 'https://x.com/dgranado.icp',
        description:
            'Daniel Daniel Daniel',
    },
];

const marketingData = [
    {
        image: RicardoButtonImage,
        icon: XIcon,
        socialMediaHandle: '@dgranado',
        socialMediaLink: 'https://x.com/dgranado.icp',
        description:
            'Daniel Daniel Daniel',
    },
];

const Team: React.FC = () => {

    return (
        <div className="team-container">
            <div className="team-text">
                <h1>TEAM</h1>
            </div>

            <div className="marquee">
                <div className="marquee-inner">
                    <div className="marquee-content">
                        <h1 className="marquee-title">DEVELOPERS</h1>
                        {developersData.map((member, index) => (
                            <TeamMember
                                key={index}
                                image={member.image}
                                icon={member.icon}
                                socialMediaHandle={member.socialMediaHandle}
                                socialMediaLink={member.socialMediaLink}
                                description={member.description}
                            />
                        ))}
                        <h1 className="marquee-title">DEVELOPERS</h1>
                        {developersData.map((member, index) => (
                            <TeamMember
                                key={`duplicate-${index}`}
                                image={member.image}
                                icon={member.icon}
                                socialMediaHandle={member.socialMediaHandle}
                                socialMediaLink={member.socialMediaLink}
                                description={member.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="marquee reverse">
                <div className="marquee-inner">
                    <div className="marquee-content">
                        <h1 className="marquee-title">DESIGNERS</h1>
                        {designersData.map((member, index) => (
                            <TeamMember
                                key={`des-${index}`}
                                image={member.image}
                                icon={member.icon}
                                socialMediaHandle={member.socialMediaHandle}
                                socialMediaLink={member.socialMediaLink}
                                description={member.description}
                            />
                        ))}
                        <h1 className="marquee-title">DESIGNERS</h1>
                        {designersData.map((member, index) => (
                            <TeamMember
                                key={`des-duplicate-${index}`}
                                image={member.image}
                                icon={member.icon}
                                socialMediaHandle={member.socialMediaHandle}
                                socialMediaLink={member.socialMediaLink}
                                description={member.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="marquee">
                <div className="marquee-inner">
                    <div className="marquee-content">
                        <h1 className="marquee-title">MARKETING</h1>
                        {marketingData.map((member, index) => (
                            <TeamMember
                                key={index}
                                image={member.image}
                                icon={member.icon}
                                socialMediaHandle={member.socialMediaHandle}
                                socialMediaLink={member.socialMediaLink}
                                description={member.description}
                            />
                        ))}
                        <h1 className="marquee-title">MARKETING</h1>
                        {marketingData.map((member, index) => (
                            <TeamMember
                                key={`duplicate-${index}`}
                                image={member.image}
                                icon={member.icon}
                                socialMediaHandle={member.socialMediaHandle}
                                socialMediaLink={member.socialMediaLink}
                                description={member.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;