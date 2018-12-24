import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './all.sass'
import containerStyles from "./styles/container.module.scss"

const TemplateWrapper = ({ children }) => (
  <div className={containerStyles.container}>
    <Helmet>
      <title>YuiTech | webエンジニアの備忘録</title>
      <link type="text/css" rel="stylesheet" href="/index.css"></link>
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
