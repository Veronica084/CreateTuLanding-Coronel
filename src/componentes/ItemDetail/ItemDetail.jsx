import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { toast, ToastContainer } from "react-toastify"



const ItemDetail = ({id, nombre, precio, img, stock, Descripción}) => {

  //debemos crear un estado local con la cantidad
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} =useContext(CarritoContext)


  // se  crea  una función que maneje la cantidad
  const manejadorCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad);


  // acá es necesario crear un objeto con item y cantidad
  const item ={id, nombre, precio} 
  
  agregarAlCarrito(item, cantidad)
  toast.info("¡Que buena elección¡", {autoClose:2000, theme:"light", position: "top-center"})
  }
  return (
    <div className ="contenedorItem">
        <h2 className="tamaño">Nombre: {nombre}</h2>
        <h3 className="tamaño">Precio: {precio}</h3>
        <h4 className="tamaño">ID: {id}</h4>
        <img src={img} alt={nombre} />
        <p>{Descripción}</p>
        {agregarCantidad > 0 ?(<Link to ="/cart">Terminar Compra</Link>) : (<ItemCount inicial ={1} stock ={stock} funcionAgregar ={manejadorCantidad}/>)}

        
    </div>
  )
}

export default ItemDetail