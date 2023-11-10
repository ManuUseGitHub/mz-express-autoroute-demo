const express = require("express");
const Autoroute = require("maze-autoroute");
const app = express();

// ROUTES ----------------------------------------------------------
const onmatch = ({ route, module }) => app.use(route, require(module));

const options = {
    onmatch,
    verbose: true,
    rootp: "/backend/routes",
    subr: "b64",
    translations: [{ from: "helloworld/hope/word", to: "worldhello" }],
    flat: true
}

const autoroute = new Autoroute();
autoroute.getMapping(options);
// END ROUTES ------------------------------------------------------

// Listening parameters
app.listen(4000, () => {
    console.log("Ready on port: " + 4000);
});