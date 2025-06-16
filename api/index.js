const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/sort-string', (req, res) => {
  const { input } = req.body;
  if (!input || typeof input !== 'string') {
    return res.status(400).json({ error: 'Please provide a valid string in "input"' });
  }
  const sorted = input.split('').sort();
  res.json({ word: sorted });

});
module.exports = app;
