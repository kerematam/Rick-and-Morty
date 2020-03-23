import React from 'react'
import NotFoundImg from 'assets/404.jpg'

import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => (
  <div className={styles.img_container}>
    <img alt="404" src={NotFoundImg} className={styles.img} />
  </div>
)

export default NotFoundPage
