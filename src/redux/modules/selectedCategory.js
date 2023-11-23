const SELECTED_CATEGORY = 'SELECTED_CATEGORY';

export const changeCategory = (category) => ({
  type: SELECTED_CATEGORY,
  payload: {
    category,
  },
});

export const initialState = 'project';

const selectedCategory = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECTED_CATEGORY:
      return payload.category;
    default:
      return state;
  }
};

export default selectedCategory;
