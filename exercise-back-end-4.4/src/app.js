const express = require('express');
const crypto = require('crypto');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');
const validateDifficulty = require('../middlewares/validateDifficulty');
const auth = require('../middlewares/auth');
const app = express();

app.use(express.json());

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post('/activities',
  validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, validateDifficulty, auth,
(_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!'} );
})

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;