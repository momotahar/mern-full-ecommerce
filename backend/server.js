import express from "express";
import data from "./data.js";

const app = express();

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
