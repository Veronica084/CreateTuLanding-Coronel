import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0){
        return(
            <>
            <h2 className="tamaño1">No hay productos en el carrito. Puede ver nuestra variedad de productos nuevamente</h2>
            <Link to="/">Ver producto</Link>



            </>
        )

    }

  return (
    <div className="contencart">
        {
            carrito.map(producto => <CartItem key ={producto.id} {...producto}/>)   
        }
        <h3 className="tamaño">Total: ${total}</h3>
        <h3 className="tamaño">Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=>vaciarCarrito}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>



    </div>
  )
}

export default Cart