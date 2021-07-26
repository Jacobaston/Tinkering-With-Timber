import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { getLoggedInUserId } from '../lib/auth.js'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

function SingleProduct({ match }) {

  const id = match.params.id
  // const token = localStorage.getItem('token')
  // const loggedInUserId = getLoggedInUserId()

  const [singleProduct, updateSingleProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/api/product/${id}`)
      updateSingleProduct(data)
    }
    fetchData()
  }, [])


  // async function handleDelete() {
  //   await axios.delete(`/api/products/${id}`, {
  //     headers: { Authorization: `Bearer ${token}` }
  //   })
  //   history.push('/')
  // }

  return (
    <>
      <div className="columns" style={{ marginBottom: '50px' }}>
        <div className="column">
          <ImageWrapper>
            <Image src={singleProduct.image} />
          </ImageWrapper>
        </div>
        <div className="column">
          <Details>
            <Title>{singleProduct.name}</Title>
            <Price>{`£${singleProduct.price}`}</Price>
            <p className="description">{singleProduct.description}</p>

            <div className="columns">
              
              <div className="column">
                <Button>
                  <A href="mailto:tinkeringwithtimber@gmail.com">Email to order</A>
                </Button>
              </div>

            </div>

            <SmallText><Bold>Standard manufacturing times</Bold> 1-2 weeks</SmallText>
            <SmallText>Orders are pick up only</SmallText>
            <ProductDimensions>
              <SmallText style={{ fontWeight: 'bold' }}>Product image dimensions</SmallText>
              <SmallText>{`Height: ${singleProduct.height}cm`}</SmallText>
              <SmallText>{`Width: ${singleProduct.widtth}cm`}</SmallText>
              <SmallText>{`Depth: ${singleProduct.depth}cm`}</SmallText>
            </ProductDimensions>
          </Details>

        </div>
      </div>
    </>
  )
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
`
const Details = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
`
const Image = styled.img`
  border-radius: 10px;
`
const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
`
const Price = styled.p`
  margin-bottom: 10px;
`
const SmallText = styled.p`
  font-size: 14px;
`
const Bold = styled.span`
  font-weight: bold;
`
const Button = styled.button`
  background: #ff6900;
  font-weight: bold;
  border: none;
  width: 100%;
  padding: 5px 0;
  border-radius: 2px;
`
const A = styled.a`
  color: #fff;
  &:hover {
    color: black;
  }
`
const ProductDimensions = styled.div`
  margin-top: 20px;
`

export default SingleProduct

{/* {singleProduct.user && <>
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
      </>} */}