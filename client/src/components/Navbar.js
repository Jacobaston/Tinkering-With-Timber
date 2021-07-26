import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
  return <>
<Nav>
  <StyledLink to={'/'}>Home</StyledLink>
  <StyledLink to={'/products'}>Products</StyledLink>
</Nav>
  </>
}

const Nav = styled.nav`
  padding: 24px;
  text-align: center;
  font-family: Raleway;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`
const StyledLink = styled(Link)`
  transition: 0.3s ease;
  background: #3fa46a;
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  border-top: 4px solid #3fa46a;
  border-bottom: 4px solid #3fa46a;
  padding: 20px 0;
  margin: 0 20px;
  &:hover {
    border-top: 4px solid #ffffff;
    border-bottom: 4px solid #ffffff;
    padding: 6px 0;
  }
`

export default Navbar