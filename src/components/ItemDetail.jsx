import React from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";



const ItemDetail = ({productos}) => {
    const {id} = useParams();
    const productoFilter = productos.filter((producto)=> producto.id == id);

  return (
    <>
      {productoFilter.map ((producto) => (
      <div  key={producto.id}>
        <div class="col-12 col-lg-4 col-md-6" >
        <div className="card" >
            <img className= "card-img-top" src={producto.img}  />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.category}</p>
                <p className="card-text">Precio: {producto.precio}</p>
                <p className="card-text">Stock: {producto.stock}</p>
                <ItemCount />
                <button className="btn btn_principal mt-3">
                Comprar
                </button>   
          </div>
        </div>
       </div>
     </div>
        ))}
    </>

  );
};

export default ItemDetail;
