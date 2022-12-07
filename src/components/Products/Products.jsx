import { products } from "../Mocks/Mocks"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Products = () => {
    return (
        <>
            <div className="row">
                <h1>Productos</h1>
                <hr></hr>
                {
                    products.map((item) =>
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