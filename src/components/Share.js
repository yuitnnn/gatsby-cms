import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import indexStyles from "../components/styles/indexPage.module.scss"

const Share = ({
  twitterUrl,
}) => (
  <a href={twitterUrl} target="_blank" rel="nofollow">Twitter</a>
)

export default Share;
