const dashnavReducer = (state = "", action) => {
    switch (action.type) {
      case "":
        return "dashboard";
      case "dashboard":
        return "dashboard";
      case "account":
        return "account";
      case "settings":
        return "settings";
      case "logout":
        return "logout";
      default:
        return state;
    }
  };
  
  export default dashnavReducer;
  