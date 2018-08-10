const express = require('express');
const bodyParser = require('body-parser');
var routes = require('./routes/routes');

const app = express()
  .use('/static', express.static('static'))
  .use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  .use(bodyParser.json())
  .use('/api', routes)
  .get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT);
