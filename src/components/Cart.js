import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)

     const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return (
        <div className="cartItems">
            <h1 >Cart</h1>
            <button className="clear" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1>CART IS EMPTY ADD ITEMS TO CART!!!!</h1>}
          <ItemsList items={cartItems}/>
        </div>
    )
}

export default Cart;
