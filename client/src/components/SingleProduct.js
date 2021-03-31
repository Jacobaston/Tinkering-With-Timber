import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getLoggedInUserId } from '../lib/auth.js'
import { Link } from 'react-router-dom'

function SingleProduct({ match }) {

  const id = match.params.id
  const token = localStorage.getItem('token')
  const loggedInUserId = getLoggedInUserId()

  const [singleProduct, updateSingleProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/api/product/${id}`)
      updateSingleProduct(data)
    }
    fetchData()
  }, [])

  console.log(singleProduct)

  async function handleDelete() {
    await axios.delete(`/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    history.push('/')
  }

  return <section className="singleProduct">
    <div className="columns is-desktop">
      <div className="column m-3">
        <figure className="image is-4by3">
          <img src={singleProduct.image} />
        </figure>
      </div>
      <div className="column m-3">
        <h2 className="title">{singleProduct.name}</h2>
        <p>£{singleProduct.price}</p>
        <p>Height: {singleProduct.height} cm</p>
        <p>Width:{singleProduct.width} cm</p>
        <p>Depth: {singleProduct.depth} cm</p>
        <p>Description: {singleProduct.description}</p>
      </div>
      {singleProduct.user && <>
        {loggedInUserId === singleProduct.user &&
          <>
            {
              <>
                <Link to={`/productform/${id}`} className="button is-primary">Edit</Link>
                <button className="button is-primary" onClick={handleDelete}>Delete</button>
              </>
            }
          </>
        }
      </>}
    </div>
  </section>
}

export default SingleProduct