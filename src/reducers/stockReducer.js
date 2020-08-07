const stockReducer = (state = "FB", action) => {
    switch (action.type) {
      case "CHANGES":
        return action.data;
      default:
        return state;
    }
  };
  
  export const stockChange = (input) => {
    return {
      type: "CHANGES",
      data: input,
    };
  };
  
  export default stockReducer;
  