const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const socketConfig = require('./config');

module.exports = function override(config, env) {
  config.plugins = [...config.plugins, new MiniCssExtractPlugin()];
  config.module.rules = [...config.module.rules, 
    {
      test: require.resolve('webrtc-adapter'),
      use: 'expose-loader'
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    },
  ];

  config.devServer = {
    compress: true,
    port: 9000,
    proxy: {
      '/bridge/': `https://localhost:${socketConfig.PORT}`
    }
  };

  config.watchOptions = {
    aggregateTimeout: 300,
    poll: 1000
  };
  
  return config;
}