const USER_LOGGEDIN = 'user/LOGGED_IN';
const USER_LOGIN = 'user/LOGIN';
const USER_LOGOUT = 'user/LOGOUT';

const initialState = {
  currentUser: {
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: null,
    uid: null,
  },
};

const userReducer = (state = initialState, action) => {
  const userInfo = action?.payload?.providerData[0] ?? initialState;
  switch (action.type) {
    case USER_LOGGEDIN:
      return { currentUser: userInfo };
    case USER_LOGOUT:
      return null;
    case USER_LOGIN:
    default:
      return state;
  }
};

export default userReducer;
