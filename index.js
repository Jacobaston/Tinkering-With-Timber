import express from 'express'
import router from './views/router.js'
import connectToDb from './lib/connectToDb.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/errorHandler.js'
import { port } from './config/environment.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

async function startServer() {
  await connectToDb()
  app.use(express.json())
  app.use(logger)
  app.use('/api', router)
  app.use(errorHandler)
  app.listen(port, () => console.log(`Up and running on port ${port}`))
}

startServer()

export const env = process.env

export default app
