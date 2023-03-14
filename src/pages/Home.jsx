import { useContext } from "react";
import ItemContext from "../context/ItemContext";
import ItemList from "../components/ItemList";

function Home() {
  const { results } = useContext(ItemContext);

  return (
    <div className="mt-16">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs sm:max-w-lg"
      />{" "}
      <button className="btn btn-primary">search</button>

      <ItemList results={results.results} />
    </div>
  );
}

export default Home;
