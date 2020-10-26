import React, { useEffect, useState, useRef } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const Image = props => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const imgRef = useRef()

  const handleLoad = e => {
    setLoading(false)
    setError(false)
  }

  const handleError = e => {
    setLoading(false)
    setError(true)
  }

  useEffect(() => {
    if (imgRef?.current?.complete) {
      handleLoad()
    }
  }, [])

  return (
    <>
      {loading && (
        <Skeleton
          animation="wave"
          variant="rect"
          className={props.className}
        ></Skeleton>
      )}
      <img
        {...props}
        style={{ display: loading || error ? 'none' : 'block' }}
        ref={imgRef}
        onLoad={handleLoad}
        onError={handleError}
        alt={props?.alt || ''}
      />
    </>
  )
}

export default Image
