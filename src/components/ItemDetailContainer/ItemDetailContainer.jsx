import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Link } from "react-router-dom"

const ItemDetailContainer=()=>{
    const [item, setItem] = useState()
    const [buscarItem, setBuscarItem] = useState(true)
    const {id} = useParams()
    
    useEffect(() => {
        const db = getFirestore()
    
        const itemRef = doc(db, 'item', id) 

        getDoc(itemRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const data = {
                id: snapshot.id,
                ...snapshot.data()
              }
              setItem(data)
            } else {setBuscarItem(false)}
          })
          .catch((error) => console.error(error))

      }, [id])

      if (buscarItem === false) {
        return (
          <div className="container"><br></br><br></br>
          <center><h2>Este producto no existe <Link to='/' >Volver al Inicio</Link></h2></center>
      </div> )
        } else {
    return(
    <div className="container">
        <blockquote className="blockquote text-right">
            {<ItemDetail item={item} />}
        </blockquote>
    </div>)
}}

export default ItemDetailContainer