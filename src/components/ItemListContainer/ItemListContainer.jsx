import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'

const ItemListContainer=()=>{

    const [items, setItems] = useState([]) 
    const {categoria} = useParams()

    useEffect(() => {
        if (categoria) {
          const db = getFirestore()
      
          const itemsCollectionQuery = query(
            collection(db, 'item'),
            where('categoria', '==', categoria)
          )
    
          getDocs(itemsCollectionQuery)
            .then((snapshot) => {
              const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
              setItems(data)
            })
            .catch((error) => console.error(error))
        }else{
            const db = getFirestore()
            const itemsCollection = collection(db, "item")
              getDocs(itemsCollection).then((snapshot)=>{
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setItems(data)
              })
        }
    }, [categoria])

    return(
<>
       
<div className="container"  >
    <div className="">
    <center>
     {<ItemList items={items} />}</center>                       
        </div>
    </div>
  
</>

    )
}

export default ItemListContainer