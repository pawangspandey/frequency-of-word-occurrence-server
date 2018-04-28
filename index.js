const express = require('express');
const request = require('request-promise');
const readline = require('readline');

const util = require('./util');

const app = express();
const PORT = process.env.PORT || 8080;



app.get('/' , (req, res) => {

  request.get('http://terriblytinytales.com/test.txt')
  .then((result) => {
    res.status(200).send(util.getMostUsedWords(result, req.query.words || 5));
  })
  .catch((error) => {
    // will use better way to log the error.
    res.status(500).send(error);
  })
});

app.listen(PORT, () => {
  console.log(`app listing on port ${PORT}`);
});
