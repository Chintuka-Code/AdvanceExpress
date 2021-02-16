const express = require('express');
const router = express.Router();

router.get('', async (req, res) => {
  console.log('Hit');
  const db = process.env.DB_URL;
  res.send(db);
});

module.exports = router;
