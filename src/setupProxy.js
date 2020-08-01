const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/interactive.jpg',
    createProxyMiddleware({
      target: 'http://localhost:3000/interactive.jpg',
      changeOrigin: true,
    })
  );
  app.use(
    '/informative.jpg',
    createProxyMiddleware({
      target: 'http://localhost:3000/informative.jpg',
      changeOrigin: true,
    })
  );
  app.use(
    '/intelligent.jpg',
    createProxyMiddleware({
      target: 'http://localhost:3000/intelligent.jpg',
      changeOrigin: true,
    })
  );
};