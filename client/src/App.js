import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import SingleProduct from './components/SingleProduct.js'
import Footer from './components/Footer.js'
import Login from './components/Login.js'
import Product from './components/Products'

import 'bulma'
import './styles/style.scss'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/products/:id' component={SingleProduct} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/products' component={Product} />
    </Switch>
    <Footer />
  </BrowserRouter>
}

export default App