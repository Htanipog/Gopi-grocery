import "./App.css";
export default function ListItems({ items, itemsSelected,deleteItem}){
const totalPrice =items.reduce((acc,item) =>
{
    return (acc =acc + (item.price * item.quantity));

},0);
if(!items.length) return <h2>No items!Please add items!</h2>;
return (
    <div>
        <h3>ItemList</h3>
        {items.map((item) => (
            <ItemDisplay item={item} itemsSelected={itemsSelected} deleteItem={deleteItem}/>
        ))}
        <div>Total Price: {totalPrice}</div>
    </div>
);
function ItemDisplay({ item, itemsSelected,deleteItem}) {
    return (
        <div className="item">
            <div>
                <input
            
            type="checkbox"
            checked={item.selected}
            onChange={() => itemsSelected(item.id)}
            />
            </div>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <div>{item.price}</div>
            <div>{item.quantity * item.price}</div>
            <div onClick={() => deleteItem(item.id)}>X </div>

        </div>
    )
}

}