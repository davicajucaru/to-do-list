import React, { useCallback, useContext, useState } from "react";
import ButtonMain from "../components/ButtonMain";
import InputMain from "../components/InputMain";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import { v4 as uuidv4 } from "uuid";
import TodosContext, { ACTIONS } from "../components/TodosContext";
import { UnorderedList } from "@chakra-ui/react";

import "../styles/index.css";

const Index = (props) => {
  const [value, setValue] = useState("");

  const { todos, dispatch } = useContext(TodosContext);

  console.log(todos);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const uuid = uuidv4();

      dispatch({
        type: ACTIONS.ADD,
        payload: { title: value, isCompleted: false, id: uuid },
      });

      setValue("");
    },
    [value, dispatch]
  );
  return (
    <div className="index">
      <Title />
      <form onSubmit={handleSubmit}>
        <InputMain value={value} setValue={setValue} />
        <ButtonMain value={value} />
      </form>
      <UnorderedList>
        {todos.map((todo) => (
          <TodoList todo={todo} key={todo.id} />
        ))}
      </UnorderedList>
    </div>
  );
};

export default Index;
