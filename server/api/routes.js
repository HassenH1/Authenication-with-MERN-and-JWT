const controller = require("./controller");
const withAuth = require("../middleware/middleware");

//routes
module.exports = (app) => {
  app.use("/checkToken", withAuth);
  app.route("/signup").post(controller.signup);
  app.route("/signin").post(controller.signin);
  app.route("/checkToken").get((req, res, next) => res.send(200));
  app.route("/logout").get(controller.logout);
};
