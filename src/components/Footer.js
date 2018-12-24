import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerStyles from "./styles/footer.module.scss"

const Footer = ({}) => (
  <footer className={footerStyles.container}>
    <p className={footerStyles.name}>
      Author: Uematsu Yui
    </p>
    <div className={footerStyles.sns}>
      <a 
        href="https://github.com/yuitnnn"
        className={footerStyles.github}
        target="_blank"
      >
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a 
        href="https://twitter.com/yu_webmemo"
        className={footerStyles.twitter}
        target="_blank"
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
    </div>
    <small className={footerStyles.small}>© 2018	YuiTech	All rights reserved.</small>
  </footer>
)

export default Footer;
