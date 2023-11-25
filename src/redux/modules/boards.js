const SET_BOARDS = 'SET_BOARDS';
const ADD_BOARD = 'ADD_BOARD';

export const initialState = [];

export const setBoards = (boards) => ({
  type: SET_BOARDS,
  payload: {
    boards,
  },
});

export const addBoard = (newBoard) => {
  return {
    type: ADD_BOARD,
    payload: newBoard,
  };
};

const boards = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BOARDS:
      return payload.boards;
    case ADD_BOARD:
      return [payload, ...state];
    default:
      return state;
  }
};

export default boards;
