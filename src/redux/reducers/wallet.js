// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// https://dev.to/cyberwolves/how-to-call-apis-in-react-redux-3f9k

import {
  REQUEST_API, REQUEST_API_SUCCESS, REQUEST_API_ERROR, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state };
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
  case ADD_EXPENSES:
    return ({
      ...state,
      expenses: [
        ...state.expenses,
        action.payload],
    });
  default:
    return state;
  }
};

export default wallet;
