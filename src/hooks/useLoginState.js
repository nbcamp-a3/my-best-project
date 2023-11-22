import { useDispatch, useSelector } from 'react-redux';

export const useLoginState = () => {
  const loginState = useSelector(({ userReducer }) => userReducer.currentUser);
  const dispatch = useDispatch();
  const setLoginState = (user) =>
    dispatch({ type: 'user/LOGGED_IN', payload: user });

  return [loginState, setLoginState];
};
