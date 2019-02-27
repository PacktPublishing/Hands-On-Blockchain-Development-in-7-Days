const http = require('http');
const express = require('express');
const app = express();
const isDevMode = process.env.NODE_ENV === 'development';
const request = require('request')

app.use(require('morgan')('short'));

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./config/webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));

  app.use(express.static(__dirname + '/'));
})();

if (isDevMode) {
    console.log("Dev Environment")
    app.get(/.*/, function root(req, res) {
      console.log("Sending dev file")
      res.sendFile(__dirname + '/src/index.html');
    });
} else {
    console.log("Prod Environment")
    app.get(/.*/, function root(req, res) {
        console.log("Sending prod file")
        res.sendFile(__dirname + '/build/index.html')
    })
}

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
