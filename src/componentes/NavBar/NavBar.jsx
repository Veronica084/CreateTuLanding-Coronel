import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
      <Link to ="/">
      <h1>20 Amperios <br />Materiales Eléctricos</h1>
      </Link>
        
        <nav>
            <ul>
                <li>
                  <Link to ="/categoria/Medicion">Medición</Link>
                </li>
                <li>
                  <Link to = "/categoria/Conductores">Conductores</Link>
                </li>
                <li>
                  <Link to ="/categoria/Proteccion">Protección</Link>
                </li>
                <li>
                  <Link to ="/categoria/herriementas">Herramientas</Link>
                </li>
                <li>
                  <Link to ="/categoria/alternativa para la eficiencia energetica">Alternativa para la eficiencia energética</Link>
                </li>
            </ul>
        </nav>
        <CartWidget/>





    </header>
        

    

  )
}







export default NavBar

