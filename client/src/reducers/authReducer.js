import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  user: {},
  isAuth: false
};

export default function (state = initialState, action) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuth: true
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isAuth: false
      };
    default:
      return state;
  }
}