const path = require('path');
const express = require('express');


var app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');


// Setup handlebars engine and views location
app.set("view engine", "ejs");


// Setup static directory to serve
//app.use(express.static(publicDirectoryPath));
app.use( express.static( "public" ));

app.get("/", function(req, res){
    res.render("home");
});






app.listen(port, () => {
    console.log('Server is up on port ' + port);
});