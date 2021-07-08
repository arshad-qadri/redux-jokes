const initialState = {
  jokes: [],
};
const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOKES":
      console.log(action);
      return {
        ...state,
        jokes: action.payload.data,
      };
    default:
      return state;
  }
};

export default jokeReducer;
