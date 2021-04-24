const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return [...state, action.productsData];
    case "ADD_TO_CART":
      return state.map((page) => {
        return page.map((product) => {
          return product.id === action.id ? { ...product, count: product.count - 1 } : product;
        });
      });
    case "REMOVE_FROM_CART":
      return state.map((page) => {
        return page.map((product) => {
          return product.id === action.id ? { ...product, count: product.count + action.count } : product;
        });
      });
    default:
      return state;
  }
};

export default productsReducer;
