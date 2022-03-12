const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost/react-login-testing-area", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  //connect mongo client to server
  connectToServer: () => {
    client.connect((err, db) => {
      if (err || !db) {
        console.log(`error connecting to mongodb ${err}`);
        return;
      }
      dbConnection = db.db("react-login-testing-area");
      console.log("Successfully connected to MongoDB.");

      return;
    });
  },

  //get database connection
  getDb: () => {
    return dbConnection;
  },
};
