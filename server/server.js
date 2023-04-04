const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

// 1. (GET to get the blog posts from DB) create the get request for BLOGS in the endpoint '/api/students'
app.get("/blogs", async (req, res) => {
  try {
    const { rows: blogform } = await db.query("SELECT * FROM blogform");
    res.send(blogform);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// 2. (GET to get the comments from DB)create the get request for COMMENTS in the endpoint '/api/students'
app.get("/comments", async (req, res) => {
  try {
    const { rows: comments } = await db.query("SELECT * FROM comments");
    res.send(comments);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// 2. create the POST request, the user is adding to the database
app.post("/postblog", async (req, res) => {
  try {
    const newStudent = {
      author: req.body.author,
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
    };
    //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
    const result = await db.query(
      "INSERT INTO blogform(author, title, body, image) VALUES($1, $2, $3, $4) RETURNING *",
      [newStudent.author, newStudent.title, newStudent.body, newStudent.image]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
