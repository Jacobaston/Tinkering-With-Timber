import Products from '../models/products.js'

async function getProducts(_req, res, next) {
  try {
    const products = await Products.find()
    res.status(200).send(products)
  } catch (err) {
    next(err)
  }
}

async function getSingleProduct(req, res, next) {
  const id = req.params.id

  try {
    const singleProduct = await Products.findById(id)
    res.status(200).send(singleProduct)
  } catch (err) {
    next(err)
  }
}

async function postProduct(req, res, next) {
  const body = req.body

  try {
    const newProduct = await Products.create(body)
    res.status(201).send(newProduct)
  } catch (err) {
    next(err)
  }
}

async function updateProduct(req, res, next) {
  const id = req.params.id
  const body = req.body

  try {
    const productToUpdate = await Products.findById(id)

    productToUpdate.set(body)

    await productToUpdate.save()

    res.send(productToUpdate)

  } catch (err) {
    next(err)
  }
}

async function deleteProduct(req, res, next) {
  const id = req.params.id

  try {
    const productToDelete = await Products.findById(id)

    await productToDelete.deleteOne()

    res.send(productToDelete)

  } catch (err) {
    next(err)
  }
}

export default {
  getProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct
}