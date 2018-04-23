import { SAVE_PINS, FETCH_PINS, ADD_PIN } from '../actions/types';

const initialState = {
  items: [],
  tempItems: []
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_PINS:
      console.log(action.payload);
      return {
        ...state,
        items: action.payload
      };
    case SAVE_PINS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };
    case ADD_PIN:
      return {
        ...state,
        tempItems: [...state.tempItems, ...action.payload],
      };
    default:
      return state;
  }
}