const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const portfinder = require('portfinder');
const cors = require('cors');
const open = require('open');

const app = express();

// Use CORS middleware
app.use(cors());

app.use('/v1/weather', createProxyMiddleware({
  target: 'https://api.api-ninjas.com',
  changeOrigin: true,
  headers: {
    'X-Api-Key': "i3GlPtu1RgHdbWp5A5uo0A==pYXme5cs3LcU7U6t"
  }
}));

app.get('/favicon.ico', (req, res) => res.status(204)); // Move this line up

app.use(express.static(__dirname));

portfinder.basePort = process.env.PORT || 3000;

portfinder.getPort((err, PORT) => {
  if (err) {
    throw new Error(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
      open('http://localhost:' + PORT);
    });
    app.get('/api/port', (req, res) => res.send({ port: PORT }));
  }
});
