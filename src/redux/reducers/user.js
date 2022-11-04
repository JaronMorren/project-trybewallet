// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIALSTATE = {
  email: '', // string que armazena o email da pessoa usuária
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'VALID_USER':
    return ({ email: action.email });
  default:
    return state;
  }
};

export default user;
