const { defineConfig } = require('@vue/cli-service');

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/bruno-yu.github.io/week-6-project/'
      : '/',
};
