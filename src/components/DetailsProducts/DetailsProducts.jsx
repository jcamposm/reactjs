import { products } from "../Mocks/Mocks"
import { useParams } from "react-router-dom"
import Count from '../Count/Count'
import './css/DetailsProducts.css'

const DetailsProducts = () => {
    const {id} = useParams()
    
    const productDetails = products.find(element => element.id === parseInt(id) );
  return (
    <>
    <div className="row">
        <div className="col-6">
          <div className="card" >
            <div className="card-body">
              <center><img src={productDetails.image} className="card-img-top w-75" alt={productDetails.title}></img> </center>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <div className="card-body">    
            <h5 className="card-title h1 text-left mb-4 py-2 rounded-3">{productDetails.title}</h5>
              <h5 className="card-title h5 p-2 rounded">Descripción</h5>
              <p className="card-text py-4">{productDetails.descripcion}</p>
              <h5 className="card-title h5 p-2 rounded mb-3">Precio</h5>
              <span className="card-text  "></span><span className="card-text h3 text-info ms-3">${productDetails.precio}</span>
              <hr></hr>
              <div className="container">
                <div className="row">
              <h5 className="card-title h5 p-2 rounded">Cantidad</h5>
              <Count className="col-2"/><button className="contenedor py-0 mt-2 col-2" ><i className="bi bi-cart-check-fill fs-3"></i> <span className="fs-3 ms-2"> + </span> </button>
              </div>
              </div>
              <hr></hr>
              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default DetailsProducts

