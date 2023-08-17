import { useState } from 'react'
import Formulario from './componentes/Formulario'
import Card from './componentes/Card'
import './App.css'

function App() {
  const[nombre, setNombre] = useState()
  const[color, setColor] = useState()
  const[validacion, setValidacion] = useState()


  function handleSubmit(nombre, color, validacion) {
    setNombre(nombre) 
    setColor(color)
    setValidacion(validacion)
  }




  return (
    <>
    <Formulario onCard = {handleSubmit}/>
    {validacion ? undefined:<Card nombre={nombre} color={color} />}
    </>
  )
}

export default App
