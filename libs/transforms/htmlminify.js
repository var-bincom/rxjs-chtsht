// minify HTML
const htmlmin = require('html-minifier');

module.exports = (env) => async (content, outputPath = '.html') => {
  if (!String(outputPath).endsWith('.html')) {
    return content;
  }

  return (await htmlmin.minify(content, {
    useShortDoctype: true,
    removeComments: env !== 'development',
    collapseWhitespace: env !== 'development',
  }));
};
