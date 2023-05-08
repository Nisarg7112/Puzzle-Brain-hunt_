const express = require('express');
const { check } = require('express-validator');

const adminController = require('../controllers/admin-controllers');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.post('/login', adminController.login);

module.exports = router;
