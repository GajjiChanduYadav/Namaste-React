// import { useState } from "react";
// import RestaurantCategory from "./RestaurantCategory";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
//     const [showIndex, setShowIndex] = useState(null);
//     const { resId } = useParams();
//     const resInfo = useRestaurantMenu(resId);

//     const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//         (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );

//     return resInfo === null ? (
//         <Shimmer />
//     ) : (
//         <div className="menu">
//             <h3>MENU</h3>
//             {categories.map((category, index) => (
//                 <RestaurantCategory
//                     key={category?.card?.card?.title}
//                     data={category?.card?.card}
//                     showItems={index === showIndex}
//                     setShowIndex={() => setShowIndex(index)}
//                 />
//             ))}
//         </div>
//     );
// };

// export default RestaurantMenu;


import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    const text = resInfo?.cards?.[0]?.card?.card?.text ?? "No Text Available";

    const handleSetShowIndex = (index) => {
        setShowIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>{text}</h1>
            <h3>MENU</h3>
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => handleSetShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;

