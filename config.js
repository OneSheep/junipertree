const { DateTime } = require("luxon");

module.exports = {
  metadata: {
    title: "My Resource Collection",
    description: "A crowdsourced index of useful links.",

    // you can get the following two ids from the URL of your Google sheet and form
    sheetId: "",
    formId: "",

    ogImage: "",
    rootUrl: "",

    // Google Tag Manager Id
    gtm: "GTM-XXXXX",

    // the format of the time stamp in your website footer
    buildTime: DateTime.local().toFormat("d MMMM yyyy - H.mm"),

    // don't worry about this setting
    env: process.env.ELEVENTY_ENV
  },

  theme: {
    brandColor: "#fd8979",
    brandColorDark: "#733D36",
    bodyFont: "Rubik",
    headingFont: "Oswald"
  },

  // Add in custom intro paragraphs for each section
  // 100% optional
  sections: {
    "starter-guide": {
      intro: "Where to start and what to consider."
    }
  },

  // list of contributors for the credits page
  contributors: [
    {
      name: "Joe Blogs",
      url: "https://www.twitter.com/joehimself",
      desc: "Chief cook and bottle washer",
      role: ["content"]
    }
  ]
};
