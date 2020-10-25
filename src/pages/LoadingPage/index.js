import React from 'react'
import LoadingImg from 'assets/loading.jpg'

import styles from './LoadingPage.module.scss'

const LoadingPage = () => (
  <div>
    <div className={styles.img_container}>
      <img alt="Loading" src={LoadingImg} className={styles.img} />
      <div className={styles.text}>Loading...</div>
    </div>
  </div>
)

export default LoadingPage
