const fs = require("fs");

module.exports = function(app) {
    
  

    app.get("/api/notes", function(req, res) {
      fs.readFile("db/db.json", (err, data) => {
        if(err) throw err;
        res.json(JSON.parse(data));
      })
      
    });
  
    function id (note) {
      var noteId = 0;
      for (let i = 0; i< notes.length; i++){
          noteId = noteId + 1;        
      }
      return noteId + note;
    }
  
    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        fs.readFile("db/db.json", (err, data) => {
          if (err) throw err;
          var notes = res.json(JSON.parse(data));
          id(notes);
          notes.push(newNote);
        })
        fs.appendFile("db/db.json", JSON.stringify(notes), (err, data) =>{
          if (err) throw err;
          console.log("A new note is added to the Note List.");
        });

        res.send(notes);
      
    });
  
  
    app.post("/api/clear", function(req, res) {
      notes.length = 0;
  
      res.json({ ok: true });
    });
    
};
