const path = require('path');
const router = require('express').Router();

// sends the user to notes.html when they click get started from main home page.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;