

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mi-primer-tienda-7cab7.firebaseapp.com",
  projectId: "mi-primer-tienda-7cab7",
  storageBucket: "mi-primer-tienda-7cab7.firebasestorage.app",
  messagingSenderId: "26183712513",
  appId: "1:26183712513:web:e5611ec2f1ce6dc9362500",
  measurementId: "G-70QYGLMCC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app)

//------------------------------------------------------------------------------------

const misProductos=[
    {id: "1", nombre:"Multímetro", precio:20000, img: "../public/imag/img-elect/multimetro.jpg", idCat: "medición", stock: 10},
    {id: "2", nombre:"Telurómetro", precio:100000, img:"../public/imag/img-elect/telurometro.jpg", idCat:"medición", stock: 15},
    {id: "3", nombre:"Pinza Amperométrica", precio:29000, img:"../public/imag/img-elect/amperometrica.jpg", idCat:"medición", stock:10},
    {id: "4", nombre:"Cable unipolar 2.5 X 100MTS", precio:80000, img:"../public/imag/img-elect/cable.jpg", idCat: "conductores", stock:10},
    {id: "5", nombre:"Cinta pasacable", precio:10000, img:"../public/imag/img-elect/cinta.jpg", idCat: "herramientas", stock:10},
    {id: "6", nombre:"Interruptor Termomagnético", precio:25000, img:"../public/imag/img-elect/termomagnetica.jpg", idCat: "protección", stock: 10},
]








import {collection, doc, writeBatch} from "firebase/firestore";


const subirProductos = async ()=>{
    //crear un batch
    const batch = writeBatch(db); 
    const productosRef =collection(db,"productos");

    //recorrer el array de los productos
    misProductos.forEach((producto)=>{
        //crea un nuevo documento con ID automatico
        const nuevoDoc = doc(productosRef);
        //agrega la operacion de escritura
        batch.set(nuevoDoc, producto);
    });

//ejecutaria el batch
    try{
        await batch.commit();
        console.log("productos subidos exitosamente");

    } catch(error){
        console.error("Error al cargar productos", error );
    }
};


//subirProductos()

