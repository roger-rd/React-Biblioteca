
import './App.css'
import { Modal } from './components'
import {  useModalContext } from './components/modal/context/modalContext'

function App() {
  const {setState} = useModalContext()

  const openModal = () =>{
    setState(true)
  }

  return (
    <>
      <Modal>
        <h2>hola es roger</h2>
        <h3>te quiero</h3>
      </Modal>
      <button onClick={openModal}>abrete sesamo</button>
    </>
  )
}

export default App
