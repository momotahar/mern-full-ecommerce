import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();
const app = express();
// Connection to MongoDB database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connection to MongoDB Successfully"))
  .catch((error) => console.log(error.message));

app.use(express.json());
app.use(cors());
//paypal api
app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
//End Point : API
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')))
app.get('*',(req, res)=>res.sendFile(path.join(__dirname, '/frontend/build/index.html')))

//error middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//Listening port
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
