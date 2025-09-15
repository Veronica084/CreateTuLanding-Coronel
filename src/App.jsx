
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import Medicion from "./componentes/Medicion/Medicion"




const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path = "/" element = {<ItemListContainer/>}/>
      <Route path = "/categoria/:idCategoria" element ={<ItemListContainer/>}/>
      <Route path = "/medicion/:idCategoria" elemento = {<medición/>}/>

    </Routes>

    </BrowserRouter>
  


    


  
  <ItemListContainer/>
  <ItemDetailContainer/>
  


    </>
    

  )
}

export default App

