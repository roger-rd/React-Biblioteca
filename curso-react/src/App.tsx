
import './App.css'
import { Button,  ColorRed } from './components'
import { GlobalPovider } from './context/global.provider'



 

function App() {

  const handleClick = () =>{
    console.log("uyyy me clickio todo")
  }

  const dimeHOla = () =>{
    alert("hola !!  ")
  }

  return (
    <GlobalPovider>
 
      <ColorRed><Button parentMethod={dimeHOla}>my Button rojo</Button></ColorRed>
      <Button parentMethod={handleClick}> My Button normal </Button>
    
    </GlobalPovider>
  )
}

export default App



