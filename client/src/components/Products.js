import axios from 'axios'
import styled from 'styled-components'
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

  return  (
    <>
    <CardWrapper>
      {product.map((prod, index) =>   
        <div key={index} className="container" style={{ background: `url(${prod.image}) center / cover` }}>
          <div className="layer-container">
            <TextContainer>
              <div>
                <ProductName>{prod.name}</ProductName>
                <ProductDescription>{prod.description}</ProductDescription>           
              </div>

              <Price>{`£${prod.price}`}</Price>
              <Link to={`/products/${prod._id}`}>
                <Button>See more</Button>
              </Link>
            </TextContainer>
          </div>       
        </div>)}
    </CardWrapper>
  </>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 30px 10px;
`

const TextContainer = styled.div`
  margin:30px 0 0 15px;
`
const ProductName = styled.p`
  font-size:16px;
  font-weight:bolder;
`
const ProductDescription = styled.p`
  margin-top:5px;
  font-size:11px;
  padding-right:2px;
`
const Price = styled.h3`
  margin-top:20px;
  font-weight:bolder;
`
const Button = styled.a`
  position:absolute;
  display:block;
  bottom:30px;
  right:15px;
  width:120px;
  height:40px;
  text-align:center;
  line-height:40px;
  background:rgba(240,58,53,1);
  color:#fff;
  font-size:13px;
  font-weight: bold;
  border-radius:5px;
  box-shadow:0 5px 15px rgba(240,58,53,.3);
`
export default Products