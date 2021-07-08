import React, { useCallback, useContext } from "react";
import { ListItem } from "@chakra-ui/react";
import "../styles/todolist.css";
import TodosContext, { ACTIONS } from "./TodosContext";

const TodoList = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);

  const handleToggle = useCallback(
    () => dispatch({ type: ACTIONS.TOGGLE, payload: todo.id }),
    [todo, dispatch]
  );
  const handleDelete = useCallback(
    () => dispatch({ type: ACTIONS.DELETE, payload: todo.id }),
    [todo, dispatch]
  );

  console.log(todo);

  return (
    <ListItem
      style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
    >
      {todo.title}
      <div>
        <button id="done" onClick={handleToggle}>
          <img alt="done" src="/correct-symbol.svg" />
        </button>

        <button id="delete" onClick={handleDelete}>
          <img alt="delete" src="/cancel-mark.svg" />
        </button>
      </div>
    </ListItem>
  );
};

export default TodoList;
