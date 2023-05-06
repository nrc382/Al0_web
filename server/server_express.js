const express = require('express');
const path = require('path');
const configurazione = require("./statics/configurazione.json");
const genera_contenuti = require("./codice_js/contenuti");

const app = express();
const port = configurazione.porta_server;

// Serve static files from the public directory
//app.use(express.static(path.join(__dirname, '/../public')));

// Homepage
app.get('/', function(req, res) {
    console.log("Sono qui");
    let risposta = genera_contenuti.pagina_iniziale(req, res)
    res.send(risposta);
});

// Avvia il server
app.listen(port, function() {
  console.log(`Server attivo sulla porta ${port}`);
});
