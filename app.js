const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// so that we can reference body
// var listItem = ""; // dummy value so that listItem can be referenced in res.render
var items = []; // empty array to store items
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", function(req, res){
    var today = new Date();
    res.render('list', {td:today.toLocaleDateString(), newListItem: items})
});
app.post("/", function(req, res){
    items.push(req.body.newItem)
    console.log(items)
    res.redirect("/");
})
app.listen(4000, function(){
    console.log("Server on port 4000");
})