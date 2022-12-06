export const ErrorHandler = (err) => {
  if (err.code === "ERR_NETWORK") {
    return {
      type: "error",
      message: "You are offline",
    };
  }
  if (err.code === "ERR_BAD_REQUEST") {
    if (err.response.data) {
      console.log(err.response.data.message);
      return {
        type: "error",
        message: err.response.data.message,
      };
    } else {
      return {
        type: "error",
        message: "Something went wrong",
      };
    }
  }
  return {
    type: "error",
    message: "Something went wrong",
  };
};
