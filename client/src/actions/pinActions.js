import { SAVE_PINS, FETCH_PINS, ADD_PIN } from '../actions/types';
import { api } from "../http"

export const fetchPins = (user) => dispatch => {
  fetch(`${api}/Pins/findByUserId?access_token=${user.id}&userId=${user.userId}`)
    .then(res => res.json())
    .then(pins =>
      dispatch({
        type: FETCH_PINS,
        payload: pins
      })
    )
};

export const savePins = (pins, user) => dispatch => {
  fetch(`${api}/Pins/savePins?access_token=${user.id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      userId: user.userId,
      pins
    }),
  })
    .then(res => res.json())
    .then(pin =>
      dispatch({
        type: SAVE_PINS,
        payload: pin
      })
    )
};

export const addPin = (pin) => dispatch => {
  dispatch({
    type: ADD_PIN,
    payload: [{location: pin}]
  });
};