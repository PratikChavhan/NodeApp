const express = reqiure("express");
const path = require("path");
const app = express();
const staticfolder = express.static(path.join(__dirname, "public"));

app.use(staticfolder)

app.get("/", (req, res) => { res.sendFile(path.join(__dirname + "/index.html")) })

app.listen(9000, () => { console.log("Server is listening at 9000") })