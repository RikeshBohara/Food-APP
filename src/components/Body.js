import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local state variables
  const [restaurant, setRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://food.wl-food.com/api/search?type=vendor&keyword=&latitude=27.7172&longitude=85.324&is_open_now=1&page=1&sortByDistance=asc"
    );

    const json = await data.json();

    console.log(json);
    setRestaurant(json?.vendors?.data);
    setFilteredRestaurant(json?.vendors?.data);
  };

  // Normal JS variable
  // let FilteredresList = resList;

  const handleClick = () => {
    setIsFiltered(!isFiltered);

    if (isFiltered) {
      setFilteredRestaurant(restaurant);
    } else {
      const filteredList = restaurant.filter((res) => res.rating > 4);
      setFilteredRestaurant(filteredList);
    }
  };

  const handleSearch = () => {
    console.log(searchText);

    const filteredRestaurant = restaurant.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
    setSearchText("");
  };

  // Loading Screen
  // Conditional Rendering
  // if (restaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={handleClick}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <Link
            key={res.id}
            to={"/restaurants/" + res.slug}
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
