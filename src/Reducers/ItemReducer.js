const ItemReducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default ItemReducer;
