import Routes from "../constants/routes";

export type RouteProp = (RouteLinkProp | RouteDropdownProp);

export interface RouteLinkProp {
    title: string;
    href: string;
    highlighted?: boolean
}

export interface RouteDropdownProp {
    title: string;
    dropdown: RouteLinkProp[];
}


export const navigationLinks: RouteProp[] = [
    {
        title: 'About',
        dropdown: [
            {
                title: 'Mission',
                href: Routes.mission
            },
            {
                title: 'Support Line ',
                href: Routes.peerSupport
            },
            {
                title: 'Media',
                href: Routes.media
            },
            {
                title: 'Fireside Equity Fund',
                href: Routes.fund
            },
        ]
    },
    {
        title: 'Resources',
        dropdown: [
            {
                title: 'Music',
                href: Routes.music
            },
            {
                title: 'Community',
                href: Routes.community
            },
            {
                title: 'Writings',
                href: Routes.writings
            }

        ]
    },
    {
        title: 'Get Involved',
        dropdown: [
            {
                title: "Peer Support Line",
                href: Routes.volunteer
            },
            {
                title: "Ambassadors and Social Media",
                href: Routes.positions
            },
            // {
            //     title: "Community Partners",
            //     href: RouteNames.communityPartners
            // },
            // {
            //     title: "Research Partners",
            //     href: RouteNames.researchPartners
            // },
            // {
            //     title: "Share",
            //     href: RouteNames.share
            // }
        ]
    },
    {
        title: 'Contact',
        href: Routes.contact
    },
    // {
    //     title: 'Donate by Crypto',
    //     href: 'https://www.thegivingblock.com/donate/Fireside-Project',
    //     highlighted: true
    // },
    {
        title: 'Become a member',
        href: Routes.member,
        highlighted: true
    }
];

