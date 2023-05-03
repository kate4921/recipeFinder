import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import './loading.css'

function Loading() {
  return (
    <div className="loading">
      <ClipLoader
        color={'#000'}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading
