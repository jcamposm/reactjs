import React, { useContext} from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import './CartWidget.css'
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

const CartWidget=()=>{
    
    const {showQuantity} = useContext(CartContext)

    if(showQuantity===0){
        return <> <span className='nav-carrito'> 
        <Link className="nav-link icono-carrito" to="/cart" >
            <ShoppingCartIcon />
        </Link>
      <p className='qty-display'>{showQuantity}</p> 

        
    </span></>
    }
    return  (
        <span className='nav-carrito'> 
            <Link className="nav-link icono-carrito" to="/cart" >
                <ShoppingCartIcon />
            </Link>
          <p className='qty-display'>{showQuantity}</p> 

            
        </span>
       
    )
} 

export default CartWidget;