module.exports = {
  entry: {
    main: ["./script1.js", "./script2.js"],
  },
  output: {
    filename: "./public/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
