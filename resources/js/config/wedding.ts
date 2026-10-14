export interface EventDetails {
    title: string;
    subtitle?: string;
    time: string;
    venueName: string;
    venueAddress: string;
    attire: string;
    parkingNotes: string[];
    calendarLink: string;
    mapsLink: string;
    wazeLink: string;
    image: string;
}

export interface AccommodationOption {
    name: string;
    address: string;
    link: string;
}

export interface FaqItem {
    question: string;
    answer: string | React.ReactNode;
}

export const weddingConfig = {
    // Couple details
    groom: {
        fullName: 'Alex Morgan',
        shortName: 'Alex',
        parentRole: 'son of',
        parents: 'David Morgan & Sarah Morgan',
        contactPhone: '+1 (555) 012-3456',
        photos: {
            primary: '/images/groom1.webp',
            hover: '/images/groom2.webp',
        },
    },
    bride: {
        fullName: 'Jordan Taylor',
        shortName: 'Jordan',
        parentRole: 'daughter of',
        parents: 'Robert Taylor & Emily Taylor',
        contactPhone: '+1 (555) 098-7654',
        photos: {
            primary: '/images/bride1.webp',
            hover: '/images/bride2.webp',
        },
    },
    coupleShortName: 'Alex & Jordan',
    weddingTitle: "Alex & Jordan's Wedding",

    // Dates & Countdown
    dateDisplay: 'Saturday, 12th of September 2026',
    weddingDateISO: '2026-09-12T00:00:00',
    calendar: {
        monthYear: 'SEPTEMBER 2026',
        startDayOffset: 2, // Tuesday
        totalDays: 30,
        weddingDay: 12,
    },
    rsvpDeadlineDisplay: '1 August 2026',
    rsvpDeadlineNotice: 'Please respond by August 1st, 2026',

    // Scripture / Quote
    quote: {
        verse: '"Bone of my bone, flesh of my flesh."',
        citation: '— Genesis 2:23',
    },

    // Events
    events: {
        ceremony: {
            title: 'Holy Matrimony',
            subtitle: '(Church Ceremony)',
            time: '2:00pm',
            venueName: 'ST. MICHAEL’S CHAPEL',
            venueAddress: '123 Ceremony Lane, Cityville, State 12345',
            attire: 'Cocktail/Formal Attire with light tones, pretty pastels and floral motifs',
            parkingNotes: [
                'On-site parking is available. Please allow extra time to find a spot.',
                '*Guests are kindly advised to arrive 20 minutes before the ceremony begins.'
            ],
            calendarLink: 'https://calendar.google.com',
            mapsLink: 'https://maps.google.com',
            wazeLink: 'https://waze.com',
            image: '/images/hfk.webp',
        },
        reception: {
            title: 'Reception Dinner',
            time: '6:00pm',
            venueName: 'THE GRAND HERITAGE BALLROOM',
            venueAddress: '456 Celebration Boulevard, Cityville, State 12345',
            attire: 'Cocktail/Formal Attire with light tones, pretty pastels and floral motifs',
            parkingNotes: [
                'Designated venue and roadside parking is available. Please consider carpooling where possible.'
            ],
            calendarLink: 'https://calendar.google.com',
            mapsLink: 'https://maps.google.com',
            wazeLink: 'https://waze.com',
            image: '/images/fui-chuai.webp',
        },
    },

    // Accommodations
    accommodations: [
        {
            name: 'The Grand Central Hotel',
            address: '100 Central Avenue, Cityville, State 12345',
            link: 'https://maps.google.com',
        },
        {
            name: 'Boutique City Suites',
            address: '250 Heritage Street, Cityville, State 12345',
            link: 'https://maps.google.com',
        },
        {
            name: 'The Heritage Inn',
            address: '380 Parkview Way, Cityville, State 12345',
            link: 'https://maps.google.com',
        },
        {
            name: 'Metropolitan Residences',
            address: '500 Skyline Drive, Cityville, State 12345',
            link: 'https://maps.google.com',
        },
    ],
    accommodationsMapUrl: 'https://maps.google.com',

    // FAQs / Social
    socialHashtag: '#AlexAndJordan2026',
};
