import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import indexStyles from "../components/styles/indexPage.module.scss"

const Share = ({
  twitterUrl,
  fbUrl,
}) => (
    <React.Fragment>
      <a href={twitterUrl} target="_blank" rel="nofollow">Twitter</a>
      <a href={fbUrl} target="_blank" rel="nofollow">Facebook</a>
    </React.Fragment>
)

export default Share;
