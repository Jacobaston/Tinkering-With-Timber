import Admin from '../models/admin.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

async function login(req, res, next) {
  const password = req.body.password

  try {
    const admin = await Admin.findOne({ email: req.body.email })

    if (!admin || !admin.validatePassword(password)) {
      return res.status(401).send({ message: 'Your password is incorrect, please try again' })
    }

    const token = jwt.sign(
      { adminId: admin._id },
      secret,
      { expiresIn: '24h' }
    )

    res.send(202).send({ token, message: 'Login successful' })

  } catch (err) {
    next(err)
  }
}

async function getAdmin(_req, res, next) {
  try {
    const admin = await Admin.find()
    res.status(200).send(admin)
  } catch (err) {
    next(err)
  }
}

export default {
  login,
  getAdmin
}