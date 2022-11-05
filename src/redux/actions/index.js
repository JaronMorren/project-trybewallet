// Coloque aqui suas actions

export const USER_INFORMATION = 'USER_INFORMATION';
export const WALLET_INFORMATION = 'WALLET_INFORMATION';

export const userInformationAction = (payload) => ({
  type: USER_INFORMATION,
  payload,
});

export const userPreferencesAction = (payload) => ({
  type: WALLET_INFORMATION,
  payload,
});
