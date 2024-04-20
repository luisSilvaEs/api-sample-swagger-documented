const express = require("express")
const router = express.Router()
const multer = require("multer");//To read request form data
const { getNotes, addNotes, deleteNotes } = require("../controllers/listController")

router.get( '/GetNotes',  getNotes );

router.post( '/AddNotes', multer().none(), addNotes );

router.delete( '/DeleteNotes', deleteNotes );

module.exports = router;