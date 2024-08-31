// import { useState } from "react";
// import ItemsList from "./ItemsList";

// const RestaurantCategory = ({data,showItems,SetShowIndex}) => {

//    console.log(data);
 
//     const handleClick = ()=>{
//         SetShowIndex();
//     };
 
//   return (
//     <div className="CategoryContainer">
//       <div className="RestCategoryHeader"  onClick={handleClick}>
//         <span className="CategoreyHeader">{data?.data?.title} ({data?.data?.itemCards.length})</span>
//         <span>🔽</span>
       
//       </div>
//      <div> {showItems && <ItemsList items= {data?.data?.itemCards}/>} </div>
     
//     </div>
//   )
// }

// export default RestaurantCategory


import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    return (
        <div className="CategoryContainer">
            <div className="RestCategoryHeader" onClick={setShowIndex}>
                <span className="CategoreyHeader">
                    {data?.title} ({data?.itemCards.length})
                </span>
                <span>🔽</span>
            </div>
            <div>
                {showItems && <ItemsList items={data?.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;

