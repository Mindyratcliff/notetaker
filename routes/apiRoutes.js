const fs = require("fs");

module.exports = function(app) {
    
  

    app.get("/api/notes", function(req, res) {
      fs.readFile("db/db.json", (err, data) => {
        if(err) throw err;
        res.json(JSON.parse(data));
      })
      
    });
  
  
    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        fs.readFile("db/db.json", (err, data) => {
          if (err) throw err;
          var notes = res.json(JSON.parse(data));
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
