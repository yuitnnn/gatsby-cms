import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import navStyles from "./styles/nav.module.scss"

const Navbar = () => (
  <nav className="is-transparent">
    <div className={navStyles.siteTitleContents}>
      <Link to="/" className={navStyles.siteTitleLink}>
        <h1 className={navStyles.siteTitle} style={{ fontFamily: 'Ubuntu' }}>YuiTech</h1>
        <div className={navStyles.siteTitleBorder}></div>
      </Link>
    </div>
    {/* <div className={navStyles.navContainer}>
      <div className="container">
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/products">
            Products
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
          <Link className="navbar-item" to="/contact/examples">
            Form Examples
          </Link>
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
      </div>
    </div> */}
  </nav>
)

export default Navbar
