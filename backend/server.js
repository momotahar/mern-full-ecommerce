import express from "express";
import data from "./data.js";

const app = express();

//End Point : API
//1. test
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//Listening port
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
