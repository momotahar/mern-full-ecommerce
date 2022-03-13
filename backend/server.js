import dotenv from 'dotenv'
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config()
const app = express();
// Connection to MongoDB database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connection to MongoDB Successfully"))
  .catch((error)=>console.log(error.message))

app.use(express.json())
app.use(cors())
//End Point : API
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

app.use((err, req, res, next) => {
  res.status(500).send({message:err.message})
})



//Listening port
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
