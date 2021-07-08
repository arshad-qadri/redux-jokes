import axios from "axios";

export const getJoke = () => {
  return async dispatch => {
    const api = await axios.get(
      "https://official-joke-api.appspot.com/jokes/ten"
    );
    dispatch({ type: "GET_JOKES", payload: api });
  };
};
