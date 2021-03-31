import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {

  const [product, updateProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/api/products')
      updateProduct(data)
    }
    fetchData()
  }, [])

  console.log(product)

  return <>
  <div className="section p-3 products">
    <div>
      <h2 className="title has-text-centered p-3">Products</h2>
    </div>
    <div className="container">
      <div className="columns is-multiline is-mobile">
        {product.map((item, index) => {
          return <div key={index} className="column is-one-third-desktop is-one-third-tablet is-half-mobile">
            <Link to={`/products/${item._id}`} >
              <section>
                <div className="card">
                  <div className="card-image pt-5">
                    <figure className="image is-4by3 mr-5 ml-5">
                      <img src={item.image} alt={item.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h2 className="title is-6 is-centered">{item.name}</h2>
                      <p className="subtitle is-6 is-centered">£{item.price}</p>
                    </div>
                  </div>
                </div >
              </section>
            </Link>
          </div>
        })}
      </div>
    </div>
  </div>
</>
}

export default Products