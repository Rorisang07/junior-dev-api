const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/sort-string', (req, res) => {
  try {
    const { data } = req.body;

    if (!data || typeof data !== 'string') {
      return res.status(400).json({ error: 'Please provide a valid string in "data"' });
    }

    const characters = data.split('').sort();
    return res.status(200).json({ word: characters });
  } catch (error) {
    console.error('Unexpected Server Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
