const initialState = {
  todos: [],
  loading: false,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/load/start":
      return {
        ...state,
        loading: true,
      };

    case "todo/load/success":
      return {
        ...state,
        todos:action.payload,
        loading: true,
      };

    default:
      return state;
  }
};
