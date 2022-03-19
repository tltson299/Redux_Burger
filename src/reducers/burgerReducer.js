import { ADD_ITEM, REMOVE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { name: "Salad", price: 10, count: 1 },
    { name: "Cheese", price: 10, count: 1 },
    { name: "Beef", price: 10, count: 1 },
  ],

  total: 30,
};

function burgerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: state.items.map((item) => {
          if (item.name === action.payload) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        }),
        total: state.items.reduce((total, item) => {
          if (item.name === action.payload) {
            ++item.count;
          }
          return item.count * item.price + total;
        }, 0),
      };

    case REMOVE_ITEM:
      return {
        items: state.items.map((item) => {
          if (item.count === 0) {
            return item;
          }
          if (item.name === action.payload) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        }),
        total: state.items.reduce((total, item) => {
          if (item.name === action.payload) {
            if (item.count > 0) {
              --item.count;
            }
          }
          return item.count * item.price + total;
        }, 0),
      };

    default:
      return state;
  }
}

export default burgerReducer;
