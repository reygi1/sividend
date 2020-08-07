const sentimentReducer = (state = null, action) => {
  switch (action.type) {
    case "SENTIMENT_GET":
      return action.data;
    default:
      return state;
  }
};

export const sentimentChange = (input) => {
  return async (dispatch) => {
    const resp = await fetch(
      `https://safe-tundra-92322.herokuapp.com/sentiment/${input}`
    );
    const data = await resp.json();
    if (data === null || data === undefined) {
      dispatch({
        type: "SENTIMENT_GET",
        data: null,
      });
    } else {
      dispatch({
        type: "SENTIMENT_GET",
        data: data,
      });
    }
  };
};

export default sentimentReducer;
