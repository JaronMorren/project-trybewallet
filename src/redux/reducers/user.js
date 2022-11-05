// This reducer deals with user related data
const INITIAL_STATE = {
  email: '', // string that stores user's email address
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_INFORMATION':
    return ({ email: action.email });
  default:
    return state;
  }
};

export default user;
