import React, { useEffect, useState } from "react";


export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const handleSubstract = () => {
        setCount(count - 1);
    }

    const handleAdd = () => {
        setCount(count + 1);
    }
    useEffect(()=>{
        setCount(parseInt(initial))
    },[initial])
   

    return(
        <div>
            <div className="d-flex justify-content-between">
            <button disabled={count<=1} className="btn btn-warning" onClick={handleSubstract}>-</button>
            <h6> {count} </h6>
            <button disabled={count >= stock} className="btn btn-warning" onClick={handleAdd}>+</button> 
            <button disabled={stock <=0} className="btn btn-warning" onClick={()=>onAdd(count)}>Agregar al Carrito</button>  
            </div>          

        </div>
    )
}

export default ItemCount