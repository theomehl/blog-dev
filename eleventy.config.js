const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // Return your Object options:

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "LLLL dd, yyyy");
	});

    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy('./favicon.png');

    return {
      dir: {
        input: "src",
        output: "public",
        includes: "../_includes"
      }
    }
  };