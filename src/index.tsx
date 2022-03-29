import * as React from 'react'

import styles from './styles.module.css'
import jequitiImage from 'jequiti.jpg'

export type JequitiProps = {
  intervalTime?: number
  zIndex?: number
}

function GlobalJequiti({ intervalTime = 10000, zIndex = 9999 }: JequitiProps) {
  const [showModal, setShowModal] = React.useState(false)

  React.useEffect(() => {
    setInterval(() => {
      handleShowModal()
    }, intervalTime)
  }, [])

  function handleShowModal() {
    setShowModal(true)

    setTimeout(() => {
      setShowModal(false)
    }, 400)
  }

  const otherStyles = {
    zIndex
  }

  return (
    <React.Fragment>
      {showModal && (
        <aside className={styles.modal} style={otherStyles}>
          <img src={jequitiImage} alt='Logo da Jequiti' />
        </aside>
      )}
    </React.Fragment>
  )
}

export default GlobalJequiti
