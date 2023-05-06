
const oggetti = require("./oggetti");
const path = require('path');


function hideContent() {
    document.querySelector('header').style.display = 'none';
    document.querySelector('main').style.display = 'none';
}
module.exports.hideContent = hideContent;


module.exports.pagina_iniziale = function (req, res, path_iniziale) {

    // Qui generi il contenuto HTML dinamicamente, utilizzando i dati che ti servono
    // dal database o da altre fonti di dati
    const titolo_pagina = 'Al0';
    const stile_css = './public/stili_CSS/index.css';
    const elementi_nav_bar = oggetti.nav_bar();
    const intestazione_pagina = `> Ciao Mondo!`;
    const contenuto_pagina = `<p>Qui c'è qualche cosa… Il contenuto della pagina</p>`;



    // Qui restituisci il contenuto HTML generato al client
    return(`
    <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <title>${titolo_pagina}</title>
      <link rel="stylesheet" href="${stile_css}">
    </head>
    
    <body>
      <nav>
        <ul>
          ${elementi_nav_bar};
        </ul>
      </nav>
    
      <header>
        <form>
        <label for="input">${intestazione_pagina}</label>
        <input type="text" id="input" name="input">
        <button type="submit">Invia</button>
      </form>
      </header>
    
      <main>
        ${contenuto_pagina};
      </main>
    
      <footer>
        <p>&copy; 2023 - nrc382</p>
      </footer>
    </body>
    
    </html>

    `);
}