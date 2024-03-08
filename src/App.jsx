import './App.css'
import Modal from './components/Modal'
import { useState } from 'react'

function App() {
  const [isModal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!isModal)
  }

  return (
    <>
      <div>
        <button onClick={toggleModal} >Click me</button>
        {isModal && <Modal setToggleModal={toggleModal} />}
      </div>
    </>
  )
}

export default App
