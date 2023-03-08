const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/v1/weather', createProxyMiddleware({
  target: 'https://api.api-ninjas.com',
  changeOrigin: true,
  headers: {
    'X-Api-Key': "i3GlPtu1RgHdbWp5A5uo0A==pYXme5cs3LcU7U6t"
  }
}));

const PORT = process.env.PORT || 3000; // use the port provided by Heroku, or default to 3000 if not available

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});

app.get('/favicon.ico', (req, res) => res.status(204));
