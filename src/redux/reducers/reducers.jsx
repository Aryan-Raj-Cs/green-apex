export const USER_STATE = {
  loading: false,
  appPost: [],
};

const Reducers = (state = USER_STATE, action) => {
  switch (action.type) {
    case "ALLPOST":
      return {
        ...state,
        allPost: [...state.allPost, action.value],
      };

    default:
      return state;
  }
};

export default Reducers;
