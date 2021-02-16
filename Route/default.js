const express = require('express');
const router = express.Router();

// Import Schema
const USER = require('../Modal/user');

router.get('', async (req, res) => {
  const email = req.body.email;
  res.send(email);
});

// Create User
router.post('/create-user', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const response = await USER.create({ name, email, password });
  res.send(response);
});

// Get All Data
router.get('/get-user', async (req, res) => {
  const data = await USER.find();
  res.send(data);
});

// specific data
router.get('/specific-column', async (req, res) => {
  // The field you want set that field to 1 like name:1 and 0 to remove
  const data = await USER.find({}, { name: 1, _id: 0 });
  res.send(data);
});

// Search for particular email and get specific feild
router.get('/persion-specific-field', async (req, res) => {
  // Search by id and get some specific column
  const data = await USER.findById('602b974d2a5fa73b5c406cae', {
    name: 1,
    email: 1,
    _id: 0,
  });
  res.send(data);
});

// how to use aggregate in mongoose
router.get('/random', async (req, res) => {
  const data = await USER.aggregate([{ $gte: { name: 'sabban' } }]);
  res.send(data);
});

module.exports = router;
