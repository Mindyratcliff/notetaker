//Imports

const express = require("express");
const path = require("path");

const app = express();

let PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("server is running...");
});