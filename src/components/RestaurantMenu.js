import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [openItems, setOpenItems] = useState({});
  const { resId } = useParams();
  console.log(resId);

  // this
  const toggle = (item) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [item.id]: !prevOpenItems[item.id],
    }));
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  // this
  const fetchMenu = async () => {
    try {
      const url = new URL(MENU_API);
      url.pathname += encodeURIComponent(resId);

      const data = await fetch(url);
      const json = await data.json();

      setResInfo(json);
    } catch (error) {
      console.error(error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{resInfo?.name}</h1>
      <p>{resInfo?.address}</p>
      <p>{resInfo?.is_open_now ? `open` : `closed`}</p>
      <h3>{resInfo?.rating + ` Stars`}</h3>
      <h2>Menu</h2>
      <ul>
        {/* this */}
        {resInfo &&
          resInfo.menus &&
          resInfo.menus.map((item) => (
            <li key={item.id}>
              <button onClick={() => toggle(item)}>{item.name}</button>
              {openItems[item.id] && (
                <ul>
                  {item.products.map((product) => (
                    <li key={product.id}>
                      {product.name} - {`Rs. ${product.price}`}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        {/* <li>{resInfo.menus[0].products[0].name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
