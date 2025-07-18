const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy("assets/img");

  // --- Filter-filter Kustom ---
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj || !(dateObj instanceof Date) || isNaN(dateObj)) {
      return '';
    }
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLLL yyyy");
  });

  eleventyConfig.addFilter("url_encode", (str) => {
    return encodeURIComponent(str);
  });
  
  eleventyConfig.addFilter("getUniqueCategories", (products) => {
    const categories = products.map(item => item.category);
    return [...new Set(categories)];
  });

  // Filter baru untuk membatasi jumlah item array
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  // Shortcode untuk mendapatkan tahun saat ini secara dinamis
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    pathPrefix: "/tokoonline/", 
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};