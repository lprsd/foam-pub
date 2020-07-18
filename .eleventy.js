module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy('assets/css');

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: [
      "md",
      "html",
      "liquid"
    ],
    passthroughFileCopy: true
  };
}; 