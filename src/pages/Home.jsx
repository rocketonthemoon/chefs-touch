import { useContext, useState } from "react";
import ItemContext from "../context/ItemContext";
import ItemList from "../components/ItemList";
import { getItems } from "../Actions";

function Home() {
  const [text, setText] = useState("");
  const { dispatch, results } = useContext(ItemContext);

  const handleItemList = async () => {
    const items = await getItems(text);
    dispatch({
      type: "GET_ITEMS",
      payload: items.data,
    });
  };

  return (
    <div className="mt-16">
      <input
        type="text"
        placeholder="Search for your favorite recipe..."
        className="input input-bordered input-primary w-full max-w-xs sm:max-w-lg"
        onKeyUp={(e) => {
          setText(e.target.value);
          handleItemList();
        }}
      />{" "}
      <ItemList results={results.results} />
    </div>
  );
}

export default Home;
