import mongoose from 'mongoose'
import connectToDb from './lib/connectToDb.js'
import dotenv from 'dotenv'
dotenv.config()

import Admin from './models/admin.js'
import Products from './models/products.js'

import getAdminData from './db/data/adminData.js'
import getProductData from './db/data/productData.js'

async function seedDatabase() {

  try {
    await connectToDb()
    console.log('✅ Database connected')

    await mongoose.connection.db.dropDatabase()
    console.log('❌ Database was dropped')

    const admin = await Admin.create(getAdminData())
    console.log(`👨‍💼 ${admin.length} admins created`)

    const products = await Products.create(getProductData(admin))
    console.log(`🛠 ${products.length} products created`)

    await mongoose.connection.close()
    console.log('👋  Goodbye!')

  } catch (err) {
    console.log('❌ Something went wrong with seeding!')
    console.log(err)
    await mongoose.connection.close()
    console.log('👋  Goodbye!')
  }
}
seedDatabase()