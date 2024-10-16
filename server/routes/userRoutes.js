const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all users');
});

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  res.send('User registered');
});


module.exports = router;
