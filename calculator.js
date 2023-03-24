const express = require("express");
const app = express();
//Create a new Route
app.get("/", function (req, res) {
  res.send("This shoul be in the Page");
});

app.get("/HomePage", function (req, res) {
  //Shoudl add the direccion + indexname
  res.sendFile(__dirname + "/" + "index.html");
});

//Call the server
app.listen(3000, function () {
  console.log("Running in 3000");
});
