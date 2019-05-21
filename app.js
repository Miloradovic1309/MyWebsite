var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});



app.listen(3000, () => {
    console.log('Server is up on port ' + 3000)
});