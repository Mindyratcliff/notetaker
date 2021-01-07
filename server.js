//Imports
const express = require("express");
const app = express();
const fs = require('fs');
​
const PORT = process.env.port || 8080;
​

let notes = [];
​
​
//Serves public folder
app.use(express.static(__dirname + "/public"));
​
// Sets up the Express app to handle data parsing Allows assumption of JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
​
/**
 * Get Calls
 */
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
​
app.get("/reserve", function (req, res) {
    res.sendFile(__dirname + "/notes.html");
});
​
​
app.get("/api/:funct", function (req, res) {
    let funct = req.params.funct;
​
    switch (funct) {
        case "notes":
            res.send(notes);
            break;
        default:
            res.sendStatus(404);
            break;
    }
});
​
​
/**
 * Post Calls
 */
app.post("/api/notes", function (req, res) {
​
        res.sendStatus(200);
    
​
​
});
​
/**
 * Delete Calls
 */
app.delete("/api/clear", function (req, res) {
    notes = [];
​
    res.sendStatus(200);
});
​
/**
 * Static Functions
 */
​
 function writesNotes (newNote){
    notes.push(newNote);
    fs.readFile('notes.html', err() 
    }
    $('.note-textarea').append(newNote);
 };
​
​
app.listen(PORT);
​
