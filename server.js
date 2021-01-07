//Imports
const express = require("express");
//Tell node to create the express server
const app = express();

​//Initial Port
const PORT = process.env.port || 8080;
​
​
​
//Serves public folder
app.use(express.static(__dirname + "/public"));
​
// Sets up the Express app to handle data parsing Allows assumption of JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
​
//Listener
​
app.listen(PORT, function(){
​
console.log(`server at http://localhost:${PORT}  ...`);
});