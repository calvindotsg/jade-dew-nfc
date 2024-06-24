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

export const METADATA: {
    name: string
    site_url: string
    image_url: string
    contact_phone: string
    street_address: string
    city: string
    state: string
    postal_code: string
    country: string
    description: string
}= {
    name: "Jade Dew RN",
    site_url: "https://www.facebook.com/JDRCS/",
    image_url: "https://images.squarespace-cdn.com/content/v1/611a9198a18cd2500bd11cc7/a99acd49-2319-4d1e-b5d3-0def1627f2ae/RN_logo_cover%403x.jpg?format=2500w",
    contact_phone: "+6590484723",
    street_address: "455 Yishun Street 41, #01-43 Dew Spring@Yishun, Singapore 760455",
    city: "Singapore",
    state: "SG",
    postal_code: "760455",
    country: "SG",
    description: "We are fellow neighbours who serve in the RC, NC, RN to promote neighbourliness through programmes to build a vibrant and cohesive community."
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
