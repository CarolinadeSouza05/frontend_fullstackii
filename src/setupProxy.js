// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Ajuste isso para o caminho do seu backend
    createProxyMiddleware({
      target: 'https://129.146.68.51/aluno33-pfsii', // URL do seu backend
      changeOrigin: true,
    })
  );
};
