const ItemReducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        results: action.payload,
      };
    case "GET_ITEM":
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default ItemReducer;
