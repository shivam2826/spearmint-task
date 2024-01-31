const path = require("path");

module.exports = {
  entry: "./src/index.js", // Update with your entry file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images", // Output folder for images
          },
        },
      },
    ],
  },
};
