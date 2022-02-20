module.exports = (eleventyConfig) => {
  // Copy the "assets" directory to the compiled "_site" folder.
  eleventyConfig.addPassthroughCopy('assets');

  // minify HTML
  const htmlminify = require('./libs/transforms/htmlminify')(process.env.ELEVENTY_ENV);
  eleventyConfig.addTransform('htmlminify', htmlminify);

  return {
    dir: {
      input: './src',
      output: './_site',
      layouts: './_layouts',
    },
    templateFormats: [
      'html',
      'liquid',
      'md',
      'njk',
      'webmanifest',
      'xml',
      'ico',
    ],
  };
};
