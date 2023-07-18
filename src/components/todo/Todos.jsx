import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { Todo } from "./Todo";

export const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(loadTodos(id));
    }
  }, [id]);

  return (
    <div>
      <ul >
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};
