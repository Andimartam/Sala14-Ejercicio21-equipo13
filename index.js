const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("Esta vendria a ser la home");
});

app.get("/articulos", function (req, res) {
  res.send("Esto es Articulos");
});

app.get("/admin", function (req, res) {
  res.send("Esto es Administrador");
});

app.get("/admin/crear", function (req, res) {
  res.send("ESte es crear");
});

app.post("/admin", function (req, res) {
  res.send("esta es la POST de create");
});

app.get("/admin/editar/:id", function (req, res) {
  res.send("Este es EL GET DE editar");
});

app.post("/admin/editar/:id", function (req, res) {
  res.send("Este es el POST editar");
});

app.get("/admin/eliminar/:id", function (req, res) {
  res.send("Esta es la pagina de eliminar");
});

app.listen(3000, function (req, res) {
  console.log("Esto se ha enviado al puerto 3000");
});
