
var path = require("path");

module.exports = function(app) {

// Routes
app.get("/", function(req, res) {
    var testpath=path.join(__dirname, "../public/index.html");
    console.log(testpath);
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
})};    

