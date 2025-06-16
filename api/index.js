const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/sort-string', (req, res) => {
  const { input } = req.body;
  if (!input || typeof input !== 'string') {
    return res.status(400).json({ error: 'Please provide a valid string in "input"' });
  }
  const characters = input.split('').sort();
  res.json({ word: characters });
});

module.exports = app;
