const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const Admin = require('../models/admin');


const login = async (req, res, next) => {
  const { email, password } = req.body;

  if(email !== "admin123@gmail.com" || password !== "12345678"){
    const error = new HttpError(
      'Invalid credentials. Please try again',
      422
    );
    return next(error);
  }

  let existingUser;
  try {
    existingUser = await Admin.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }
  
  if(existingUser){
    let token;
    try {
      token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        'supersecret_dont_share',
        { expiresIn: '1h' }
      );
    } catch (err) {
      const error = new HttpError(
        'Logging in failed, please try again later.',
        500
      );
      return next(error);
    }
  
    res.json({
      userId: existingUser.id,
      email: existingUser.email,
      token: token
    });
  }
  else{
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
      const error = new HttpError(
        'Could not create user, please try again.',
        500
      );
      return next(error);
    }

    const createdUser = new Admin({
      name: "Admin",
      email,
      password: hashedPassword,
    });

    try {
      await createdUser.save();
    } catch (err) {
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);
    }
  
    let token;
    try {
      token = jwt.sign(
        { userId: createdUser.id, email: createdUser.email },
        'supersecret_dont_share',
        { expiresIn: '1h' }
      );
    } catch (err) {
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);
    }
  
    res
      .status(201)
      .json({ userId: createdUser.id, email: createdUser.email, token: token });
  }

};

exports.login = login;
