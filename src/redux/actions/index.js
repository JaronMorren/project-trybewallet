// https://dev.to/cyberwolves/how-to-call-apis-in-react-redux-3f9k

export const USER_INFORMATION = 'USER_INFORMATION';
export const WALLET_INFORMATION = 'WALLET_INFORMATION';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

export const userInformationAction = (payload) => ({
  type: USER_INFORMATION,
  payload,
});

export const userPreferencesAction = (payload) => ({
  type: WALLET_INFORMATION,
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

// https://www.pluralsight.com/guides/delete-data-from-json-using-a-key-in-react

export const fetchCurrency = async (dispatch) => {
  try {
    dispatch(requestAPI());
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const data = await response.json();
    delete data.USDT; // delete operator removes USDT from object
    const currenciesArray = Object.keys(data);
    dispatch(requestApiSuccess(currenciesArray));
  } catch (error) {
    dispatch(requestApiError(error));
  }
};

export const actionFetchCurrency = () => fetchCurrency;
