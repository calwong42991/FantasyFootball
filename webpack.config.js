const path = require("path");

const DIST_DIR = path.join(__dirname, "/React-Client/dist");
const SRC_DIR = path.join(__dirname, "/React-Client/src");

const config = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx||.*?/, 
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            "react",
            "es2015"
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};

module.exports = config;



