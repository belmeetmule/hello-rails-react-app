const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './app/javascript/main.css',
  output: {
    filename: 'main.css',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
        ],
      },
    ],
  },
};
