import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./styles/share.module.scss"

const Share = ({
  twitterUrl,
  fbUrl,
}) => (
    <div className={styles.shareContent}>
      <a
        className={styles.twitterShare}
        href={twitterUrl}
        target="_blank"
        rel="nofollow"
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a
        className={styles.fbShare}
        href={fbUrl}
        target="_blank"
        rel="nofollow"
      >
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </a>
    </div>
)

export default Share;
