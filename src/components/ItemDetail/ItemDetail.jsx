import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const { addToCart } = useContext(CartContext);
    const [count, setCount] = useState(0)


    useEffect(()=>{
        console.log(count)
    },[count])

    const handleAdd = (quantity) =>{
        setCount(quantity)
        
        addToCart(item, quantity)

    }

    return (
                <div className="row">
                <div className="col-6">
                <div className="card" >
                    <div className="card-body">
                    <center><img src={item?.imagen} className="card-img-top w-75" alt={item?.nombre}></img> </center>
                    </div>
                </div>
                </div>
                <div className="col-6">
                <div>
                    <div className="card-body">    
                    <h5 className="card-title h1 text-left mb-4 py-2 rounded-3">{item?.nombre}</h5>
                    <h5 className="card-title h5 p-2 rounded">Descripción</h5>
                    <p className="card-text py-4">{item?.descripcion}</p>
                    <h5 className="card-title h5 p-2 rounded mb-3">Precio</h5>
                    <span className="card-text  "></span><span className="card-text h3 text-info ms-3">${item?.precio}</span>
                    <hr></hr>
                    <div className="container">
                        <div className="row">
                    <h5 className="card-title h5 p-2 rounded">Cantidad</h5>
                    <ItemCount stock={10} initial='1' onAdd={handleAdd}/>
                    </div>
                    </div>
                    <hr></hr>
                    
                    </div>
                </div>
                </div>
            </div>
    )
}
export default ItemDetail