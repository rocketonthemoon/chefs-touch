import { useContext } from "react";
import ItemContext from "../context/ItemContext";
import ItemList from "../components/ItemList";
import axios from "axios";

function Home() {
  const { dispatch, results } = useContext(ItemContext);

  const item = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/`,
  });

  const getItems = async (text) => {
    const params = new URLSearchParams({
      query: text,
      number: 100,
      apiKey: "1898a2b71edd4ec689e79bab52e28b37",
    });
    const response = await item.get(`complexSearch?${params}`);
    dispatch({
      type: "GET_ITEMS",
      payload: response.data,
    });
  };

  return (
    <div className="mt-16">
      <input
        type="text"
        placeholder="Search for your favorite recipe..."
        className="input input-bordered input-primary w-full max-w-xs sm:max-w-lg"
        onKeyUp={(e) => {
          getItems(e.target.value);
        }}
      />{" "}
      <ItemList results={results.results} />
    </div>
  );
}

export default Home;
