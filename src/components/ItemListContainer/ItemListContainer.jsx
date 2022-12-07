import "./css/ItemListContainer.css"
import {Link} from "react-router-dom";

const ItemListContainer = ({product}) => {
   const {id,title,image,precio} = product 
   
  
   
    return (
        <>
       
            <div className="card my-2" >
                <div >
                <center>
                <img src={image} className="card-img-top imagenesProductos" alt="..."></img></center>
                    <div className="card-body">                       
                        <h4 className="card-title">{title}</h4>
                        <br />
                        <center><h5 className="fw-bolder text-info">Precio: ${precio}</h5></center>                   
                        <center><Link to={`/detalle/${id}`} className="btn btn-primary mt-3" ><p className="bi bi-eye"> ver más</p></Link></center>                       
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default ItemListContainer