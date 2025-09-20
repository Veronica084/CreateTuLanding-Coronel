
const misProductos=[
    {id: "1", nombre:"Multímetro", precio:20000, img: "https://media.knova.com.mx/products/12505@2x.jpg?t=inicial", idCat: "medición", stock: 10},
    {id: "2", nombre:"Telurómetro", precio:100000, img:"https://diseelec.com/wp-content/uploads/2022/11/TELUROMETRO-DIGITAL-DE-TIERRA-UNIT-UT521.jpg", idCat:"medición"},
    {id: "3", nombre:"Pinza Amperométrica", precio:29000, img:"https://images.precialo.com/products/pinza-amperimetrica-digital-uni-t-ut202a-600a/148fc2f1-3a48-44a3-a2be-bc2989f80268.jpeg", idCat:"medición", stock:10},
    {id: "4", nombre:"Cable unipolar 2.5 X 100MTS", precio:80000, img:"https://http2.mlstatic.com/D_NQ_NP_617846-MLU71249457063_082023-O.webp", idCat: "conductores", stock:10},
    {id: "5", nombre:"Cinta pasacable", precio:10000, img:"https://www.nth.com.ar/86-thickbox_default/cinta-pasacable-grilon.jpg", idCat: "herramientas", stock:10},
    {id: "6", nombre:"Interruptor Termomagnético", precio:25000, img:"https://cdn.homedepot.com.mx/productos/151666/151666-z.jpg", idCat: "protección", stock: 10},
]
 export const getProductos= ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },100)
    })
}


export const getUnProducto =(id) =>{
    return new Promise (resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        },100)
    })
}

export const getProductosPorCategoria = (idCategoria)=>{
    return new Promise (resolve => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item =>item.idCat ===idCategoria)
            resolve(productosCategoria)
        }, 100)

        
    })
}

