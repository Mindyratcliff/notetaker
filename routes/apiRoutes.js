const fs = require("fs");

module.exports = function(app) {
    
  

    app.get("/api/notes", function(req, res) {
      fs.readFile("db/db.json", (err, data) => {
        if(err) throw err;
        return(data);
      })
    });
  
  
    app.post("/api/notes", function(req, res) {
        notes.push(req.body);
        res.json(true);
        console.log(notes);
      
    });
  
  
    app.post("/api/clear", function(req, res) {
      notes.length = 0;
  
      res.json({ ok: true });
    });
    
};
