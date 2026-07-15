export default function eleventy (eleventyConfig) {
  // Force Eleventy to output files with .html extensions (no pretty directory folders)
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  // Pass through copy for static assets
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("app.js");
  eleventyConfig.addPassthroughCopy("brand_marks");
  eleventyConfig.addPassthroughCopy("brand_configurations_40.svg");
  eleventyConfig.addPassthroughCopy("docs");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
