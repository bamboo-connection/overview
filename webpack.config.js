const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: ['node_modules'],
        loader: 'babel-loader',      
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

      // {
      //   test: /\.css$/,
      //   include: SRC_DIR,
      //   loader: ['style', 'css']
      // }


// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const path = require('path');

// module.exports = {
//   entry: './src/app.js',
//   output: {
//     path: __dirname + '/dist',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     compress: true,
//     port: ,
//     // stops long console output
//     stats: 'errors-only',
//     open: false
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader', 'sass-loader']
//         })
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Template',
//       minify: {
//         collapseWhitespace: true
//       },
//       hash: true,
//       template: 'src/index.html'
//     }),
//     // creats an app.css file.
//     new ExtractTextPlugin('app.css')
//   ]
// };
