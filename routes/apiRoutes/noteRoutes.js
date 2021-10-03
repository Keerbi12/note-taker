const router = require("express").Router();

const { 
    notes
} = require('../../db/db.json');
const {
    newNote
}  = require('../../lib/noteFunctions');

// Getting the note
router.get('/notes', (req, res) => {
    let savedNotes = notes;
    // respond with the saved notes json
    res.json(savedNotes);
});

// Creating new note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = newNote(req.body, notes);
    res.json(note);
})


module.exports = router;
