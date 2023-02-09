require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, function (req, res) {
  console.log("Esto se ha enviado al puerto 3000");
});
