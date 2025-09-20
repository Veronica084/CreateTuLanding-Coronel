import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react"

const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const manejadorCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad);
  }
  return (
    <div className ="contenedorItem">
      <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui suscipit iure aliquid animi expedita,</p>
        {agregarCantidad > 0 ?(<Link to ="/cart">Terminar Compra</Link>) : (<ItemCount inicial ={1} stock ={stock} funcionAgregar ={manejadorCantidad}/>)}

        
    </div>
  )
}

export default ItemDetail