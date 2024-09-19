import * as a from "./actionTypes";
//
const initialState = [];
//
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];

    case a.DELETE_BOOK:
      return console.log(state);

    default:
      return state;
  }
};

export default booksReducer;
