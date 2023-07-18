export const loadUsers = () => {
  return (dispatch) => {
    dispatch({ type: "users/load/start" });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "users/load/success",
          payload: data,
        });
      });
  };
};


export const loadTodos =(id)=>{
  return (dispatch) => {
    dispatch({ type: "todo/load/start" });

    fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "todo/load/success",
          payload: data,
        });
      });
  };
}