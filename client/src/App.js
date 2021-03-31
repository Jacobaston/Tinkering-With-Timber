import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
// import SingleProduct from './components/SingleProduct.js'

import 'bulma'
import './styles/style.scss'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/products/:id' component={SingleProduct} /> */}
    </Switch>
  </BrowserRouter>
}

export default App