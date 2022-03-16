import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import {isAuth, generateToken } from "../utils.js";
const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compareSync(password, user.password))) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  })
);
userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = User({
      name,
      email,
      password: bcrypt.hashSync(password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);
userRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res)=> {
    const user = await User.findById(req.user._id)
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updateUser = await user.save()
      res.send({
        _id:updateUser._id,
        name:updateUser.name,
        email:updateUser.email,
        isAdmin: updateUser.isAdmin,
        token: generateToken(updateUser),
      })
    } else {
      res.status(401).send({ message: "User not found" });
    }
  }))

export default userRouter;
