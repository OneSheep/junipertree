const { DateTime } = require("luxon");
const publicRoot = 'dist';

module.exports = function(eleventyConfig) {
  // let env = process.env.ELEVENTY_ENV;

  // follow dateForHumans in app.js
  eleventyConfig.addFilter("dateForHumans", item => {
    if (!item.date) return "";
    let startDate = DateTime.fromISO(item.date).toFormat("d LLLL yyyy");
    if (!item.time && !item.enddate) return startDate;
    if (item.time) return `${startDate} at ${item.time}`;
    if (!item.enddate) return startDate;

    let endDate = DateTime.fromISO(item.enddate).toFormat("d LLLL yyyy");
    return `${startDate} to ${endDate}`;
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromISO(dateObj).toFormat("d LLLL yyyy");
  });

  eleventyConfig.addFilter("dewidow", s => {
    return s.replace(/ (?=[^ ]*$)/i, "&nbsp;");
  });

  eleventyConfig.addFilter("urlEncode", s => {
    return encodeURIComponent(s);
  });

  eleventyConfig.addFilter("plusify", s => {
    return s.split(" ").join("+");
  });

  eleventyConfig.addFilter("countResources", obj => {
    i = 0;
    Object.keys(obj).map(function(key, index) {
      i += obj[key].length;
    });
    return i;
  });

  eleventyConfig.addLayoutAlias("default", "templates/base.njk");
  eleventyConfig.addLayoutAlias("page", "templates/page.njk");

  // Assets pass-through
  eleventyConfig.addPassthroughCopy("src/assets/icons");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy({ "src/assets/static": "/" });

  return {
    templateFormats: ["html", "njk", "md"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: publicRoot,
      data: "_data",
      includes: "_includes"
    }
  };
};
