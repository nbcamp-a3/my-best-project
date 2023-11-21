const USER_LOGIN = 'auth/LOGIN';

const User = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return state;
    default:
      return state;
  }
};

export default User;
