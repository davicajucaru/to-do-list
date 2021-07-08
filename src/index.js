import React from "react";
import ReactDOM from "react-dom";

import { TodosProvider } from "./components/TodosContext";

import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.jsx";

ReactDOM.render(
  <ChakraProvider>
    <TodosProvider>
      <App />
    </TodosProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
