// Initialize script for MongoDB

// Connect to the default database
var db = db.getSiblingDB('todoappdb');

// Create a collection named 'todoappcollection'
db.createCollection('todoappcollection');