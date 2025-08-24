
import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito="https://w7.pngwing.com/pngs/12/220/png-transparent-cart-shopping-ic-google-material-design-3-icon.png"
  return (
    <div>
        <img className="imgCarrito"src={imgCarrito} alt="imagen de carrito de compras" />
        
    </div>
  )
}

export default CartWidget