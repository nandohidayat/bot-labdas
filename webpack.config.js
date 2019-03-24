// Imports: Dependencies
const path = require("path");
require("@babel/register");
// Webpack Configuration
const config = {
  // Entry
  entry: "./public/javascript/index.js",
  // Output
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "bundle.js"
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  // Plugins
  plugins: []
};
// Exports
module.exports = config;
