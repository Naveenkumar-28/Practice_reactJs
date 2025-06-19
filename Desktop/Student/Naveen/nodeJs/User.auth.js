const express = require('express');
const { register, forgetPassword } = require('./Controller/authConroller');
const router = express.Router();

router.post('/register',register)
router.post('/forget-password/:id',forgetPassword)

module.exports={router}