module.exports = {
    output: {
      path: __dirname + '/lib',
      filename: 'browserdom.min.js',
      library: 'BrowserDOM',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
      }
  };
