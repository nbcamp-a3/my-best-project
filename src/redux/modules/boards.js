const SET_BOARDS = 'SET_BOARDS';

export const initialState = [];

export const setBoards = (boards) => ({
  type: SET_BOARDS,
  payload: {
    boards,
  },
});

const boards = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BOARDS:
      return payload.boards;
    default:
      return state;
  }
};

export default boards;
