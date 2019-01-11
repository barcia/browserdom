module.exports = {
    entry: './src/browsersnoop.js',
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      }
  };
