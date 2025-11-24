module.exports = function (eleventyConfig) {
  // passthrough copies
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "layouts",
      output: "_site"
    }
  };
};
