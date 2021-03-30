import jwt from 'jsonwebtoken'
import Admin from '../models/admin.js'
import dotenv from 'dotenv'
dotenv.config()
import { secret } from '../config/environment.js'

async function secureRoute(req, res, next) {

  try {
    const authToken = req.headers.authorization

    if (!authToken || !authToken.startsWith('Bearer')) {
      return res.status(401).send({ message: 'Unauthorized Access, not an auth-token' })
    }

    const token = authToken.replace('Bearer ', '')

    jwt.verify(token, secret, async (err, data) => {

      if (err) {
        return res.status(401).send({ message: 'Unauthorized Access' })
      }

      const admin = await Admin.findById(data.userId)

      if (!admin) {
        return res.status(401).send({ message: 'Unauthorized, admin not found' })
      }

      req.currentAdmin = admin

      next()
    })
  } catch (err) {
    res.status(401).send({ message: 'Unauthorized Access' })
  }
}

export default secureRoute