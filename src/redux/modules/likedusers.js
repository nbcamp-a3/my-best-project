export const initialState = { like: 0 };

export const setLike = (payload) => {
  return {
    type: 'SET_LIKE',
    payload,
  };
};

const likedusers = (state = initialState.like, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'SET_LIKE':
      return action.payload;
    default:
      return state;
  }
};

export default likedusers;
