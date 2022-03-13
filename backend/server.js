import dotenv from 'dotenv'
import express from "express";
import mongoose from 'mongoose';
import data from "./data.js";

dotenv.config()
const app = express();
// Connection to MongoDB database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connection to MongoDB Successfully"))
  .catch((error)=>console.log(error.message))


//End Point : API

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find(pdt => pdt.slug === req.params.slug)
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({message:"Product Not Found"})
  }
});
//Get  a Single product to add to the cart by id
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find(pdt => pdt._id === req.params.id)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({message:"Product not Found"})
  }
})

//Listening port
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
