import express from 'express'
import admin from '../controllers/admin.js'
import products from '../controllers/products.js'
import secureRoute from '../middleware/secureRoute.js'

const router = express.Router()

router.route('/products')
  .get(products.getProducts)
  .post(secureRoute, products.postProduct)

router.route('/product/:id')  
  .get(products.getSingleProduct)
  .put(secureRoute, products.updateProduct)
  .delete(secureRoute, products.deleteProduct)

router.route('/login')
  .post(admin.login)  

router.route('/admin')
  .get(admin.getAdmin)  

export default router