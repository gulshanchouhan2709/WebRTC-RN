const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const config = require('./config');
const socket = require('./lib/socket');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

//we need a key and cert to run https
//we generated them with mkcert
// $ mkcert create-ca
// $ mkcert create-cert
const key = fs.readFileSync('cert.key');
const cert = fs.readFileSync('cert.crt');

//we changed our express setup so we can use https
//pass the key and cert to createServer on https
const server = https.createServer({key, cert}, app);

server.listen(config.PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.PORT);
});
