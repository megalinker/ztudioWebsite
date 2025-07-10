export interface Person {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
}

export const persons: Person[] = [
    {
        id: '1',
        name: 'Sagar Shah',
        subtitle: 'AI & Blockchain Dev and Advisor',
        description: 'Development leader of the team.',
        imgSrc: '/assets/persons/sshah.webp',
        twitter: 'https://x.com/sagarshah1611',
        linkedin: 'https://www.linkedin.com/in/sagarshah16/',
        github: 'https://github.com/sagcryptoicp',
    },
    {
        id: '2',
        name: 'Ricardo Capuz',
        subtitle: 'AI & Blockchain Dev and Advisor',
        description: 'Projects booster. Problem solver and creative thinker always tinkering.',
        imgSrc: '/assets/persons/capuzr.webp',
        twitter: 'https://x.com/capuzr',
        linkedin: 'https://www.linkedin.com/in/capuzr',
        github: 'https://github.com/CapuzR',
    },
    {
        id: '3',
        name: 'Jesús Pérez',
        subtitle: 'FullStack Dev & Video maker',
        description: 'Versatile creator: Apps, videos, music, games, and digital content.',
        imgSrc: '/assets/persons/jperez.webp',
        linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-p%C3%A9rez-82b9a2136',
        github: 'https://github.com/megalinker',
    },
    {
        id: '4',
        name: 'Nisarg Shah',
        subtitle: 'Backend Dev',
        description: 'Backend master, with a focus on security and scalability.',
        imgSrc: '/assets/persons/ndev.webp',
        twitter: 'https://x.com/sagarshah1611',
        linkedin: 'https://www.linkedin.com/in/sagarshah16/',
        github: 'https://github.com/sagcryptoicp',
    },
    {
        id: '5',
        name: 'Daivik Joshi',
        subtitle: 'Frontend Dev',
        description: 'Interoperability and integrations expert.',
        imgSrc: '/assets/persons/ddev.webp',
        linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-p%C3%A9rez-82b9a2136',
        github: 'https://github.com/megalinker',
    },
    {
        id: '6',
        name: 'Daniel Granado',
        subtitle: 'Graphic and UX/UI Designer',
        description: 'Creator of high-impact concepts that navigate between creativity and usability.',
        imgSrc: '/assets/persons/dgranado.webp',
        twitter: 'https://x.com/dgrandoicp',
        linkedin: 'https://www.linkedin.com/in/daniel-alejandro-granado/',
    },
    {
        id: '7',
        name: 'Laura Rivero',
        subtitle: 'Illustrator',
        description: 'Illustrator with a background in art and architecture.',
        imgSrc: '/assets/persons/lrivero.webp',
        linkedin: 'https://www.linkedin.com/in/laura-valentina-rivero-moro-694968293/',
    },
    {
        id: '8',
        name: 'Daniela Torres',
        subtitle: 'Marketing and Data Analyst',
        description: 'Placeholder Description',
        imgSrc: '/assets/persons/dtorres.webp',
        linkedin: 'https://www.linkedin.com/in/daytopat/',
    },
];
