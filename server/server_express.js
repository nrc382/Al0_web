const express = require('express');
const path = require('path');
const configurazione = require("./statics/configurazione.json");

const app = express();
const port = configurazione.porta_server;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '/../public')));

// Homepage
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Avvia il server
app.listen(port, function() {
  console.log(`Server attivo sulla porta ${port}`);
});
