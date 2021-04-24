const initialCart = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialCart.addedIds, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.includes(action.id) ? state : [...state, action.id];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item !== action.id);

    default:
      return state;
  }
};

const quantityById = (state = initialCart.quantityById, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return Object.keys(state).includes(`${action.id}`) ? { ...state, [action.id]: state[action.id] + 1 } : { ...state, [action.id]: 1 };

    case "REMOVE_FROM_CART":
      delete state[action.id];
      return { ...state };

    default:
      return state;
  }
};

const cartReducer = (state = initialCart, action) => {
  return {
    addedIds: addedIds(state.addedIds, action),
    quantityById: quantityById(state.quantityById, action),
  };
};

export default cartReducer;
