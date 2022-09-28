import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="links">
              <Link className="link" to="?cat=art">
                <h5>ART</h5>
              </Link>
              <Link className="link" to="?cat=art">
                <h5>science</h5>
              </Link>
              <Link className="link" to="?cat=art">
                <h5>technology</h5>
              </Link>
              <Link className="link" to="?cat=art">
                <h5>design</h5>
              </Link>
              <Link className="link" to="?cat=art">
                <h5>programming</h5>
              </Link>

              <span>John</span>
              <span>Logout</span>
              <span className="write">
              <Link className="link" to={`/write?edit=2`}>
                <h5>write</h5>
              </Link>
              </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar