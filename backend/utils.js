import jwt from 'jsonwebtoken'
import User from './models/userModel.js'
export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRE})
}