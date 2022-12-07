import { useParams } from "react-router-dom"
import { Productos } from "../Mocks/Mocks"
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Categories = () => {
    const { categoria } = useParams()
    
    return (
            <div className="row">
                <h2 className="ms-4">{categoria.toUpperCase()}</h2>
                <hr></hr>
                {
                    Productos.map((item) => item.categoria === categoria &&
                        <div className="col-3" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
    )
}

export default Categories