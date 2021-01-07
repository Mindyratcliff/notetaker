
module.exports = function(app) {
    
  
  
    app.get("/api/notes", function(req, res) {
      res.json(noteListItems);
    });
  
    app.post("/api/notes", function(req, res) {
        notes.push(req.body);
        res.json(true);
      
    });
  
  
    app.post("/api/clear", function(req, res) {
      notes.length = 0;
  
      res.json({ ok: true });
    });
  };