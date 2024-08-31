
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
const[filteredRestaurat,setFilteredRestaurant] = useState([]);
  const[searchText, setSearchText] = useState("");


  const onlieStatus=useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const restaurants =   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setListOfRestaurants([]); // Set an empty array in case of an error
    }
  };
// if(listOfRestaurants.length === 0){
//     return < Shimmer/>;
// }
if(onlieStatus===false) return <h1>Looks Like You'r Offline Please Check Your Internet Connectivity </h1>

  return listOfRestaurants?.length === 0 ?  < Shimmer/>: (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" data-testid="searchInput" className="search-box" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button className="search-btn" onClick={()=>{
                const filteredRestaurat = listOfRestaurants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filteredRestaurat)
               
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          filteredRestaurat?.map((restaurant) => (
          <Link style={{ textDecoration: 'none' }}  key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
             <RestaurantCard  resData={restaurant} />
          </Link> 
          ))
       
        }
      </div>
    </div>
  );
};

export default Body;

