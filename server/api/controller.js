const auth = require("../service/auth");

//controllers
const controllers = {
  signin: (req, res) => auth.findUser(req, res),
  signup: (req, res) => auth.createUser(req, res),
  logout: (req, res) => auth.logout(req, res),
};

module.exports = controllers;
