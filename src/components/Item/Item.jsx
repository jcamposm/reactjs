import React from "react";
import { Link } from "react-router-dom";


const Item=({item})=>{

    return(
     <div className="card" style={{width: '18rem'}}>
        <img src={item.imagen} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">Precio ${item.precio} CLP</p>
            <Link className="btn btn-warning" to={`/item/${item.id}`}>Ir al Producto</Link>
        </div>
    </div>

   )
}

export default Item