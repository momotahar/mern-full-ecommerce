import express from 'express'
import Product from '../models/productModel.js'
import data from '../data.js'
const seedRouter = express.Router()

//this route is used to insert an array of data in the database
seedRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products)
    res.send({createdProducts})
})
export default seedRouter