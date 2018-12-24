import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
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
  </div>
)

export default TemplateWrapper
