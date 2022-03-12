const jwt = require("jsonwebtoken");
const dbo = require("../db/db");
const secret = require("../mockEnv");

const auth = {
  createUser: (req, res, next) => {
    const payload = {
      username: req.body.username,
      password: req.body.password,
    };
    const dbConnect = dbo.getDb();
    dbConnect.collection("Users").insertOne(payload, (err, result) => {
      if (err) {
        res.send({ status: 400, message: "Error creating user" });
      } else {
        res.send({ status: 200, ...result });
      }
    });
  },
  findUser: async (req, res, next) => {
    const payload = {
      username: req.body.username,
      password: req.body.password,
    };
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("Users")
      .findOne(
        { username: payload.username, password: payload.password },
        { projection: { password: 0 } },
        (err, result) => {
          if (err) {
            res.send({ status: 400, message: "Error trying to login" });
          } else {
            if (!result) {
              res.send({ status: 404, message: "No user was found" });
            } else {
              const token = jwt.sign(payload, secret);
              if (token) {
                res
                  .cookie("token", token, {
                    httpOnly: true,
                  })
                  .send({ status: 200, ...result });
              } else {
                res.send({ status: 400, message: "cannot generate cookie" });
              }
            }
          }
        }
      );
  },
  logout: (req, res) => {
    res.cookie("token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
    res.status(200).send({ message: "user is logged out", status: 200 });
  },
};

module.exports = auth;
