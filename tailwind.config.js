module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                para: ['"Poppins"', "sans-serif"],
                heading: ['"Montserrat"', "sans-serif"],
            },
            colors: {
                primary: "#ff523b",
                secondary: "#415161",
                footer: "#313131",
            },
            backgroundImage: {
                offer: "-webkit-gradient(linear, left top, left bottom, from(#e2e2e29e)), url('../img/offer-banner-01.jpg')",
            },
            backgroundPosition: {
                70: "70%",
            },
            maxWidth: {
                20: "20%",
                60: "60%",
                80: "80%",
            },
            width: {
                "row-sm": "95%",
                row: "72rem",
            },
            borderWidth: {
                "2rem": "0.125rem",
            },
            lineHeight: {
                12: "4rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
