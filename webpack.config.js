const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV === "development";

const fileNames = fs.readdirSync("./src/pages");
const entriesFiles = fileNames.reduce((acc, file) => {
  acc[file] = `./pages/${file}/${file}.js`;
  return acc;
}, {});

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    ...entriesFiles,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: devMode ? "[name].js" : "js/[name].[hash].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode
        ? "[name].[contenthash].css "
        : "styles/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: devMode ? `pages/index.html` : `index.html`,
      template: `./pages/index/index.pug`,
      chunks: fileNames,
    })
  ],

  devServer: {
    watchFiles: ["pages/index/index.html", "pages/auth/auth.html"],
    historyApiFallback: true,
    // port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "resolve-url-loader",
            options: {
              debug: true,
              sourceMap: false,
              removeCR: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: path.join("svg", "[name].[contenthash][ext]"),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
};
