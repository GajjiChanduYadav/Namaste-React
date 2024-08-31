import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
const ItemsList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
       dispatch(addItem(item))
    }
   
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="ItemsStyle"> 
                 <div className="content"> 
                   <div>
                       <span className="itemhead">{item.card.info.name}</span>
                         <span className="itembody"> - ₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                   </div>
                         <p>{item.card.info.description}</p>
                   </div>  
                   <div className="imgdiv" >
                    <div className="btnname">
                        <button className="btnstyle" onClick={()=>handleAddItem(item)}> Add +</button>
                    </div>
                          <img className="itemimg" src={CDN_URL+item.card.info.imageId}/>
                    </div>
                </div>   
            ))}
        
           
        </div>
    );
};

export default ItemsList;
