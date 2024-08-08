// Initialize script for MongoDB
console.log("---- START init-mongo.js file ----");
console.log("Connecting to database");
// Connect to the default database
var db = db.getSiblingDB('todoappdb');
console.log("Create collection 'todoappcollection'");
// Create a collection named 'todoappcollection'
db.createCollection('todoappcollection');
console.log("---- END init-mongo.js file ----");
