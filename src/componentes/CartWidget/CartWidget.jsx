

import { Link } from "react-router-dom"
import "./CartWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartWidget = () => {
    
    const imgCarrito="https://img.freepik.com/vector-premium/icono-canasta-compras-estilo-sencillo-plantilla-web-aplicacion_23648-4473.jpg"

    const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div>
         
        <img className="imgCarrito"src={imgCarrito} alt="imagen de carrito de compras" />
        <Link to="/cart">
          {cantidadTotal > 0 && <strong> {cantidadTotal}</strong>}
        </Link>
        
    </div>
  )
}



export default CartWidget
