module.exports = {
    entry: './src/browserdata.js',
    output: {
        filename: 'browserdata.js'
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      }
  };
