import React from 'react'

import GlobalJequiti from 'react-jequiti'
import 'react-jequiti/dist/index.css'

const App = () => {
  return (
    <>
      <div className='page'>
        <h1>Live example react-jequiti</h1>
      </div>

      <GlobalJequiti intervalTime={2000} />
    </>
  )
}

export default App
