module.exports = {
    name: "Focil Legal",
    email: "david@focillegal.com",
    phoneForTel: "805-991-6692",
    phoneFormatted: "(805) 991-6692",
    address: {
        lineOne: "3717 E Thousand Oaks Blvd",
        lineTwo: "Suite 160",
        city: "Westlake Village",
        state: "CA",
        zip: "91362",
        country: "United States",
        mapLink: "https://maps.app.goo.gl/mfuGfRsbJfqiezrP7",
    },
    socials: {
        facebook: "https://www.facebook.com/focillegal",
        instagram: "https://www.instagram.com/focillegal",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.focillegal.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
