const filterReducer = (filterCompleted = false, action) => {
  switch (action.type) {
    case "filter/toggle":
      return !filterCompleted;
    default:
      return filterCompleted;
  }
};

export default filterReducer;
