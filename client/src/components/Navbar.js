import React from 'react'

function Navbar() {
  return <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <a>About</a>
          </div>
          <div className="navbar-item">
            <a>Products</a>
          </div>
          <div className="navbar-item">
            <a>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  </>
}

export default Navbar