const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api/v1/weather', createProxyMiddleware({
  target: 'https://api.api-ninjas.com',
  changeOrigin: true,
  headers: {
    'X-Api-Key': process.env.API_KEY
  }
}));

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});
