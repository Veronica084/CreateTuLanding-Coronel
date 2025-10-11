import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"









const NavBar = () => {
  return (
    <header>
      <Link className="estiloEnLinea1"to ="/">
      <h1 className="estiloEnLinea1">20 amperios <br /> <p className="estiloEnLinea2">Materiales Eléctricos</p></h1>
      </Link>

      
        
        <nav>
            <ul>
                <li>
                  <Link className="estiloEnLinea"to ="/categoria/medición">Medición</Link>
                </li>
                <li>
                  <Link className="estiloEnLinea"to = "/categoria/conductores">Conductores</Link>
                </li>
                <li>
                  <Link className="estiloEnLinea" to ="/categoria/protección">Protección</Link>
                </li>
                <li>
                  <Link className="estiloEnLinea"to ="/categoria/herramientas">Herramientas</Link>
                </li>
                
            </ul>
        </nav>
        <CartWidget/>





    </header>
        

    

  )
}







export default NavBar

