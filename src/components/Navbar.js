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
  </nav>
)

export default Navbar
