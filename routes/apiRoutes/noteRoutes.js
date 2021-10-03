const router = require("express").Router();

const { 
    notes
} = require('../../db/db.json');
const {
    newNote,
}  = require('../../lib/noteFunctions');


module.exports = router;
