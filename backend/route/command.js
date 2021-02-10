const express = require('express');
const router = express.Router();
const Command = require('../controller/Command');
//add command
router.post('/', (req, res) => {
    Command.Addcommand(req, res)
});
module.exports = router;