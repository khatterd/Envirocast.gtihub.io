const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors());

const apiProxy = createProxyMiddleware('/v1/weather', {
    target: 'https://api.api-ninjas.com',
    changeOrigin: true,
    headers: {
        'X-Api-Key': 'i3GlPtu1RgHdbWp5A5uo0A==pYXme5cs3LcU7U6t'
    }
});

app.use('/v1/weather', apiProxy);

// Listen on the Vercel assigned port
app.listen(process.env.PORT, () => {
    console.log(`Proxy server listening on port ${process.env.PORT}`);
});
