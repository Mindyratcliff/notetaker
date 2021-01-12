const fs = require("fs");

module.exports = function(app) {
    
  var notes;

    app.get("/api/notes", function(req, res) {
      fs.readFile("db/db.json", (err, data) => {
        if(err) throw err;
        res.json(JSON.parse(data));
      })
      
    });
  
    
  
    app.post("/api/notes", function(req, res) {
        
        fs.readFile("db/db.json", (err, data) => {
          if (err) throw err;
          var notes = JSON.parse(data);
          var noteId = 0;
          for (let i = 0; i< notes.length; i++){
          noteId = noteId + 1;        
          }
          var newNote = {
            id: noteId,
            title: req.body.title,
            text: req.body.text
          };
          notes.push(newNote);
          
          fs.writeFile("db/db.json", JSON.stringify(notes), "utf-8", (err, data) =>{
            if (err) throw err;
            console.log("A new note is added to the Note List.");
          });
        })
        
        

        res.send(notes);
      
    });
  
  
    app.post("/api/clear", function(req, res) {
      notes = {};
  
      res.json({ ok: true });
    });
    
};
