import { createContext, useEffect, useState, Context } from "react";

const RestaurantContext = createContext(null);

const RestaurantContextProvider = ({ children }) => {
  const ALL_RESTAURANT_URL = "http://8888/restaurant/restaurants";

  const [restaurants, setRestaurants] = useState([]);

  async function fetchRestaurants(url) {
    const FETCHED_DATA = await fetch(ALL_RESTAURANT_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRestaurants(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchRestaurants(ALL_RESTAURANT_URL);
  }, []);
  return (
    <RestaurantContext.Provider value={restaurants}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantContextProvider };
