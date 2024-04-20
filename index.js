const Express = require("express");
const cors = require("cors");//To overwrite express default that disables request from extern domains or ports, NOT DO IN PROD
const app = Express();

let Mongoclient = require("mongodb").MongoClient;
const CONNECTION_STRING = "mongodb://mongodb:27017/todoappdb";
const DATABASE_NAME = "todoappdb";
let database;

const todoRoutes = require("./routes/todolist.js")

app.use(cors());

app.use("/api/todoapp", todoRoutes )

app.listen(8888, () => {
    console.log("Server starter in port 8888...");
    
    Mongoclient.connect( CONNECTION_STRING, ( error, client ) => {
        if (error) {
            console.error("MongoDB Server connection failed:", error.message);
        } else {
            database = client.db(DATABASE_NAME);
            console.log("Mongo DB Sever Connection Successful")
            app.set("database", database)
        }
    } );

} );

module.exports = app;

