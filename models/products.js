import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true  },
  height: { type: Number },
  width: { type: Number },
  depth: { type: Number }
})

export default mongoose.model('Product', productSchema)