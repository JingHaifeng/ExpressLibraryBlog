var express = require('express');
var app = express();

app.get('/', (req, res) => {
  console.log('root get');
  res.send('Hello');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});