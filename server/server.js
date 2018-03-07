const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = require('./app');
const config = require('../webpack.config.js');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(3002, () => {
  console.log('Listening on port 3002');
});
