module.exports = (ctx) => {
  return {
    plugins: [
      require('autoprefixer'),
      ctx.env !== 'development' && require('postcss-csso'),
    ],
  };
};
