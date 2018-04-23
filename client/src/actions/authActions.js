import { LOGIN, LOGOUT } from '../actions/types';
import { api } from "../http"

export const login = (regData) => dispatch => {
  fetch(`${api}/Users/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(regData),
  })
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: LOGIN,
        payload: user
      })
    )
};

export const logout = () => dispatch => {
  fetch(`${api}/Users/logout`, {
    method: 'POST',
  })
    .then(res =>
      dispatch({
        type: LOGOUT,
        payload: ''
      })
    )
};