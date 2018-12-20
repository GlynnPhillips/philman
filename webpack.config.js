const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    "dist/main": "./src/main.js",
    sw: "./src/service-worker.js"
  },
  output: {
    path: path.resolve(__dirname)
  },
  plugins: [
    new MiniCssExtractPlugin({})
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: '/dist/fonts'
          }
        }]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: '[name].[ext]',
              outputPath: './images'
            }
          }]
        }
    ]
  }
};
