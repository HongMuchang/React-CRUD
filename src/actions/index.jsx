import axios from "axios";
export const READE_EVENTS = "READE_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);

  console.log(response);
  dispatch({ type: "READE_EVENTS", response });
};

// Action Createrの実装
