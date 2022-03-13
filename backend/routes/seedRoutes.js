import express from 'express'
import Product from '../models/productModel.js'
import User from '../models/userModel.js'
import data from '../data.js'
const seedRouter = express.Router()

//this route is used to insert an array of data in the database
seedRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products)
    await User.remove({});
    const createdUsers = await User.insertMany(data.users)
    res.send({createdProducts, createdUsers})
})
export default seedRouter