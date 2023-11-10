const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(`Welcome to this resource ${__dirname.replace(process.cwd(),"")}`);
})

router.get('/how-r-u', async (req, res) => {
    res.send("Glad you asked! I am fine!");
})

module.exports = router;