import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"


const CartItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext(CarritoContext)
  return (
    <div>
        <h4>{item.nombre}</h4>
        <p className="tamaño">Cantidad: {cantidad}</p>
        <p className="tamaño">Precio: {item.precio}</p>
        <button onClick ={()=>eliminarProducto(item.id)}>Eliminar</button> 
    </div>
  )
}

export default CartItem