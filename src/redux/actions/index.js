// https://dev.to/cyberwolves/how-to-call-apis-in-react-redux-3f9k

export const USER_INFORMATION = 'USER_INFORMATION';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const userInformationAction = (payload) => ({
  type: USER_INFORMATION,
  payload,
});

export const requestAPI = () => ({ type: REQUEST_API });
export const requestApiSuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});
export const requestApiError = (payload) => ({
  type: REQUEST_API_ERROR,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

// https://www.pluralsight.com/guides/delete-data-from-json-using-a-key-in-react

export const fetchCurrency = async (dispatch) => {
  try {
    dispatch(requestAPI());
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(endpoint);
    const data = await response.json();
    delete data.USDT; // delete operator removes USDT from object
    const currenciesArray = Object.keys(data);
    // console.log({ currenciesArray, data });
    dispatch(requestApiSuccess(currenciesArray));
    return data;
  } catch (error) {
    dispatch(requestApiError(error));
  }
};

export const getExchangeRates = () => async (dispatch) => {
  const exchangeRates = await fetchCurrency(dispatch);
  return exchangeRates;
};

export const actionFetchCurrency = () => fetchCurrency;
