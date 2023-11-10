const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(`Welcome to this resource at FOLDER ${__dirname.replace(process.cwd(),"")}`);
})

router.get('/greet/name/:something', async (req, res) => {
    res.send(`Please to meet you ${req.params.something} ! I'm an endpoint defined at FOLDER ${__dirname.replace(process.cwd(),"")}`);
})

module.exports = router;