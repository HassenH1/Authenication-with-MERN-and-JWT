const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const routes = require("./api/routes");
const connect = require("./db/db");
const cookieParser = require("cookie-parser");
connect.connectToServer(); //database connection

//middleware is called every time a request is sent to the server
app.use(cookieParser()); //parses cookies attached to the client request object
app.use(
  cors({
    origin: true, //included origin as true
    credentials: true, //included credentials as true
  })
); //CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API
app.use(express.json()); //parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//This file is creating our server and assigns routes to process all requests.
routes(app);

//Listen to connection
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
