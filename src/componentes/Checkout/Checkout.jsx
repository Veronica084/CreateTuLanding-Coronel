import React from "react";
import { useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const { carrito, vaciarCarrito, total, totalUnidad } =
    useContext(CarritoContext);

  //se crea una funcion para que frene la recarga del formulario
  const manejadorFormulario = (event) => {
    event.preventDefault();

    //para verificar que todos los campos esten completos

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor debe completar todos los campos del formulario");
      return;
    }
    //Para validar que los campos del email coincidan
    if (email !== emailConfirmacion) {
      setError("Los campos de email no coinciden");
      return;
    }
    // se debe crear un objeto con todos los datos de la orden
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    //se debe gurdar la orden en la base de datos
    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("se produjo un error al cargar la orden!");
      });
  };
  return (
    <div>
      <h2 className="Checkout">Checkout:</h2>
      <form className= "contenform"onSubmit={manejadorFormulario}>
        <div>
          <label htmlFor="">Nombre</label>
          <input className="inputForm" type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Apellido</label>
          <input className="inputForm" type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Teléfono</label>
          <input className="inputForm"type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input className="inputForm" type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Confirmación de Email</label>
          <input className="inputForm" type="Email"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Confirmar compra</button>

        {ordenId && (
          <strong>
            {" "}
            Gracias por tu compra!! <hr />
            Tu número de orden es:{ordenId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
