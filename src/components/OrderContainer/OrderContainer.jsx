import { getDocs, getFirestore , collection } from "firebase/firestore"
import { useState } from "react";
import Swal from "sweetalert2";


const OrderContainer=()=>{
    
    const [order, setOrder] = useState([]) 
    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])

    const queryId = (e)=>{
        setSearch(e.target.value)
        handleSearch()
    }

    const handleSearch = ()=>{
        const db = getFirestore();
        const queryCollection = collection(db, 'orders')
        getDocs(queryCollection)
            .then(res => setOrder(res.docs.map(item => ({id: item.id, ...item.data()}))))
    } 
    const handleSearchResult = ()=>{
        const showOrder =  order.find((e) => e.id === search)
        if(showOrder){
            setResult([showOrder])
        }
        else{
            Swal.fire({
                title: 'Orden no Encontrada',
                icon: 'error'
            })
        }

    }
    
  
    return(
        <div className="container">
                 <h2>Buscar Orden<input className="form-control" type='text' placeholder="ID" value={search} onChange={queryId}/><button onClick={handleSearchResult} className='btn btn-success'>Buscar</button></h2>
        
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID de Compra</th>
                            <th>Nombre</th>
                            <th>Total de la Compra</th>
                            <th>Fecha de la Compra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result.map((result) => 
                                <tr key={result.id}>
                                    <th>{result.id}</th>
                                    <th><h4> {result.buyer.Nombre} </h4></th>
                                    <th><h4> {result.total} $CLP</h4></th>
                                    <th><h4>{result.fecha}</h4></th>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
        
            </div>)

       

    
}
export default OrderContainer