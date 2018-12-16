import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import indexStyles from "../components/styles/indexPage.module.scss"

const Share = ({
  twitterUrl,
  fbUrl,
}) => (
    <React.Fragment>
      <a href={twitterUrl} target="_blank" rel="nofollow">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a href={fbUrl} target="_blank" rel="nofollow">
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
    </React.Fragment>
)

export default Share;
