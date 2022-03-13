import dotenv from 'dotenv'
import express from "express";
import mongoose from 'mongoose';
import data from "./data.js";
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config()
const app = express();
// Connection to MongoDB database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connection to MongoDB Successfully"))
  .catch((error)=>console.log(error.message))


//End Point : API
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)



//Listening port
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
