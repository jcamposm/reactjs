import Item from "../Item/Item"

const ItemList=({items})=>{ 

    return<div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-between">
            {items.map((item)=> (
                <Item key={item.id} item={item} />
            ))}
            </div>
    
}

export default ItemList