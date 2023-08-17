import { useState } from "react"

function Formulario (props){
     
    const[nombre, setNombre] = useState('')
    const[color, setColor] = useState('')
    const[estado, setEstado] = useState('')

    function validar(event){
        event.preventDefault()
        console.log(nombre);
        console.log(color);
        if(nombre.trimStart() !==' ' && nombre.length >= 3 && color.length >= 6 ){
            // eslint-disable-next-line react/prop-types
            setEstado('')
            props.onCard(nombre,color,estado)
        }else{
            setEstado('Por favor chequea que la información sea correcta')
        }
    }
    

    return(
        <form onSubmit={validar}>
            <label htmlFor="elegirColor">Elegir un color</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <button type="enviar">Enviar</button>
            {estado ? <div>{estado}</div> : null } 
        </form>
        

    )
}

export default Formulario