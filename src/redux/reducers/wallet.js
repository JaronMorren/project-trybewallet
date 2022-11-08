// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// https://dev.to/cyberwolves/how-to-call-apis-in-react-redux-3f9k

import { REQUEST_API_SUCCESS, REQUEST_API_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case REQUEST_API_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
