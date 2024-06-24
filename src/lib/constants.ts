export const LINKS: {
    link: string
    logo: string
    name: string
}[] = [
    {
        link: "https://www.facebook.com/JDRCS/",
        logo: "fa6-brands:facebook",
        name: "Facebook"
    },
    {
        link: "https://wa.me/+6590484723",
        logo: "fa6-brands:whatsapp",
        name: "Whatsapp"
    },
    {
        link: "https://www.onepa.gov.sg/rc/jade-dew-rn/",
        logo: "fa6-regular:calendar",
        name: "Event"
    },
];

export const WELCOME: {
    description: string[]
} = {
    description: [
        "👋 Welcome to Jade Dew RN @ Nee Soon Link"
    ]
}

export const FOOTER: {
    footer: string
} = {
    footer: "Built with ❤️ by your neighbours at Jade Dew RN"
}

export const EVENT_METADATA = {
    name: "Nee Soon Link National Day Celebrations 2024", // Name of the event
    startDate: "2024-08-03T07:30:00+08:00", // Start date in ISO 8601 format
    endDate: "2024-08-03T17:00:00+08:00", // End date in ISO 8601 format
    attendanceMode: "OnlineEventAttendanceMode", // Attendance mode: Online, Offline, or Mixed
    status: "EventScheduled", // Status of the event: Scheduled, Cancelled, Postponed, or Rescheduled
    locationName: "North View Primary School", // Name of the location
    streetAddress: "210 Yishun Ave 6", // Street address
    addressLocality: "Singapore", // City
    addressRegion: "Singapore", // State or region (if applicable)
    postalCode: "768960", // Postal code
    addressCountry: "SG", // Country code
    image_url: "https://jadedew.netlify.app/preview.jpg", // URL of the event image
    description: "Come and celebrate National Day with Nee Soon Link!", // Description of the event
    site_url: "https://www.onepa.gov.sg/events/nee-soon-link-national-day-celebrations-2024-27909168", // URL of the event page
};

export const ORGANIZER_METADATA = {
    name: "Jade Dew RN", // Name of the organizer
    url: "https://www.facebook.com/JDRCS/", // URL of the organizer
};

export const TICKET_METADATA = {
    url: "https://www.onepa.gov.sg/events/nee-soon-link-national-day-celebrations-2024-27909168", // URL to purchase tickets
    price: "6", // Ticket price
    currency: "SGD", // Currency of the ticket price
    availability: "InStock", // Availability: InStock, OutOfStock, PreOrder
    validFrom: "2024-06-06T00:00:00+08:00", // ISO 8601 date when the tickets go on sale
};

export const VIDEO_CARD: {
    id: string,
    title: string,
    poster: string,
} = {
    id: "JOc1RGkBviQ",
    title: "NDP 1998 Theme Song - Home",
    poster: "https://blog.design-start.com/wp-content/uploads/2024/03/ndplogo2024.jpg"
}

export const loaderAnimation = [".loader", {
    opacity: [1, 0], pointerEvents: "none"
}, {
    easing: "ease-out"
},];
