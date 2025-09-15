
import "./Item.css"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>ID:{id}</p>
        <button>ver detalles</button>
    </div>
  )
}

export default Item