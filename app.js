const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    var today = new Date();
    res.render('list', {td: today})
});

app.listen(3000, function(){
    console.log("Server on port 3000");
})