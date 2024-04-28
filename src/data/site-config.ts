export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Ashish Kulkarni',
    subtitle: 'Software Developer',
    description: 'Personal website for Ashish Kulkarni',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://dribbble.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: "Journey of a Software Developer",
        text: "Welcome to my personal website! I'm Ashish Kulkarni, a seasoned software developer currently serving as a Lead Tech at D. E. Shaw India with over 7 years of dedicated experience in the realm of software engineering. I hold a degree in Computer Science from the esteemed College Of Engineering Pune (COEP) Tech University. Beyond my professional endeavors, I nurture a passion for reading non-fiction and indulging in strategic games like chess and cricket. Here, you'll find insights into my work, interests, and the journey that has shaped my career in technology.",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 0,
    projectsPerPage: 0
};

export default siteConfig;
