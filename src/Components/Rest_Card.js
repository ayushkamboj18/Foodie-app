import React, { useState } from "react";
// import { RestaurantList } from "../data/Data";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

function Rest_Card() {
  const [searchText, setSearchText] = useState([]);
  const [restaurants, setRestaurants] = useState();
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const imageLink = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }

      const jsondata = await response.json();
      setRestaurants(
        jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurants(
        jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
          );
    } catch (error) {
       
    }
  };
  

  useEffect(() => {
    // Api call here bcz useEffect call only for one time, it is not dependent to others
    getRestaurants();
  }, []);

  function FilterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  }

  const handleSearch = () => {
    const data = FilterData(searchText, restaurants);
    setfilteredRestaurants(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  
  if (filteredRestaurants.length === 0) return <Shimmer />;

  return (
    <div>
      {/* Seach Bar */}
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        />
        <button className="button" onClick={handleSearch}>
          Search
        </button>
        <h1>{searchText}</h1>
      </div>

      {/* Food Items */}
      <div className="flex margin">
        {filteredRestaurants.map((restaurant) => (
          <div className="card" key={restaurant.info.id}>
            <img
              src={
                restaurant?.info?.cloudinaryImageId
                  ? imageLink + restaurant?.info?.cloudinaryImageId
                  : restaurant.info.imageId
              }
              alt={restaurant.info.name}
            />
            <h2>{restaurant?.info?.name}</h2>
            <h2>{restaurant?.info?.costForTwo}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rest_Card;
