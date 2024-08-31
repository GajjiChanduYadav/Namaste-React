import { useState ,useEffect} from "react";
import { MENU_APL } from "./constant";

const useRestaurantMenu = (resId)=>{
const[resInfo,setResInfo]=useState(null);


useEffect(() => {
    fetchMenu();
}, []);

const fetchMenu = async () => {
    const response = await fetch(MENU_APL+resId);
    const json = await response.json();
    setResInfo(json.data);
};
return resInfo;
};

export default useRestaurantMenu;