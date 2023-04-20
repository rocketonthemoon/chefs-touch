import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ItemContext from "../context/ItemContext";
import Progress from "../components/Progress";
import { Markup } from "interweave";
import { getCurrentItem } from "../Actions";

function ItemPage() {
  const { id } = useParams();

  const { dispatch, current } = useContext(ItemContext);

  const handleSingleItem = async () => {
    const currentItem = await getCurrentItem(id);
    dispatch({
      type: "GET_ITEM",
      payload: currentItem.data,
    });
  };

  useEffect(() => {
    handleSingleItem();
  }, []);

  if (current.length == 0) {
    return <Progress />;
  }

  return (
    <div className="mt-10">
      <h1 className="font-bold text-4xl my-4">{current.title}</h1>
      <p className="ml-10 text-gray-600 italic text-sm font-light">
        <Markup content={current.summary} />
      </p>
      <img className="border-0 rounded-md my-3" src={current.image} alt="" />
      <div className="flex lg:flex-row justify-around sm: flex-col items-center">
        <div className="sm: order-2">
          <h3 className="font-bold my-4">Ingredients</h3>
          <ol className="list-decimal ml-10">
            {current.extendedIngredients.map((item, index) => {
              return (
                <li className="text-base text-gray-600" key={index}>
                  {item.original}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="my-4 text-sm sm: order-1">
          <ul className="flex lg:flex-col sm: flex-row">
            <li className="my-2 flex flex-col items-center justify-center sm: mx-2">
              <p className="font-bold">Yields</p> {current.servings} servings
            </li>
            <li className="my-2 flex flex-col items-center justify-center sm: mx-2">
              <p className="font-bold">Prep Time</p> {current.readyInMinutes}{" "}
              Minutes
            </li>
            <li className="my-2 flex flex-col items-center justify-center sm: mx-2">
              <p className="font-bold">Price / Servings</p>{" "}
              {current.pricePerServing}
            </li>
          </ul>
        </div>
      </div>
      <h3 className="font-bold m-4">Instructions</h3>
      <ol className="list-decimal ml-10">
        {current.analyzedInstructions[0].steps.map((item, index) => {
          return (
            <li key={index} className="text-base text-gray-600">
              {item.step}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ItemPage;
