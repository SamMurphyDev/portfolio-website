const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  webpack: function (config, env) {
    if (env === 'development') {
      config.plugins.push(
        new StylelintPlugin({
          configFile: './.stylelintc.json',
        })
      );
    }

    return config;
  },
};
