const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/public/js/main.js",
    AnswerComponent: "./src/public/js/AnswerComponent.js",
  },

  plugins: [new MiniCssExtractPlugin({ filename: "css/styles.css" })],
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "js/[name].js",
    // entry 의 이름으로 파일을 저장함
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
