function  Card (props) {


    return (
        <div>
            <p>Hola  {props.nombre}</p>
            <p>Sabemos que tu color favorito es </p>
            <div>{props.color}</div>
        </div>
    )
    
}
export default Card