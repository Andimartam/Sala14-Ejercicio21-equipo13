require("dotenv").config();
const express = require("express");
const app = express();
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
  }
);

class Article extends Model {}

Article.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      allowNull: true,
      type: DataTypes.BLOB,
    },
    create_date: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize, modelName: "article", timestamps: false }
);

/* Comentario */
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  const articles = await Article.findAll();
  res.json(articles);
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
