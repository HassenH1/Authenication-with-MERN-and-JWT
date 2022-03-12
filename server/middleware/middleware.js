const jwt = require("jsonwebtoken");
const secret = require("../mockEnv");

const withAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res
      .status(401)
      .send({ status: 401, message: "Unauthorized: No token provided" });
  } else {
    jwt.verify(token, secret, (err) => {
      if (err) {
        res
          .status(400)
          .send({ status: 400, message: "Unauthorized: Invalid token" });
      } else {
        res.status(200).send({ status: 200, message: "Authorized" });
      }
    });
  }
};
module.exports = withAuth;
