const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Aturan #6: Salin folder statis (CSS, JS, Gambar) ke folder output `_site`
  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy("assets/img");

  // --- Filter-filter Kustom ---

  // Filter untuk format tanggal yang mudah dibaca
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj || !(dateObj instanceof Date) || isNaN(dateObj)) {
      return '';
    }
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLLL yyyy");
  });

  // Filter untuk mengubah string menjadi format URL yang aman
  eleventyConfig.addFilter("url_encode", (str) => {
    return encodeURIComponent(str);
  });

  // Shortcode untuk mendapatkan tahun saat ini secara dinamis
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Konfigurasi utama
  return {
    // Aturan #1: Konfigurasi Path Prefix untuk GitHub Pages (Subfolder)
    // GANTI 'NAMA_REPO_ANDA' dengan nama repositori GitHub Anda.
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