const USER_LOGGEDIN = 'user/LOGGED_IN';
const USER_LOGIN = 'user/LOGIN';
const USER_LOGOUT = 'user/LOGOUT';

const initialState = {
  user: null,
};

export const checkLoginStatus = (user) => ({
  type: 'user/LOGGED_IN',
  payload: user,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGEDIN:
      const userInfo = action.payload?.providerData[0] ?? null;
      return { user: userInfo };
    case USER_LOGOUT:
      return { user: null };
    case USER_LOGIN:
    default:
      return state;
  }
};

export default userReducer;
