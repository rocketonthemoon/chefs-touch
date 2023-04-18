import Item from "../components/Item";
import Progress from "../components/Progress";

function ItemList({ results }) {
  if (!results) {
    return <Progress />;
  }
  return (
    <div className="container my-10 mx-auto">
      {results.map((result) => {
        return <Item key={result.id} item={result} />;
      })}
    </div>
  );
}

export default ItemList;
