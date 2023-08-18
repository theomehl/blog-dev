const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
    // Return your Object options:

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addPassthroughCopy("./src/fonts");

    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };