import { Productos } from "../Mocks/Mocks"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './css/Products.css'

const Products = () => {
    return (
        <>
            <div className="row">
                <hr></hr>
                <center><h2>Nuestros Productos</h2></center>
                <hr></hr>
                {
                    Productos.map((item) =>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Products