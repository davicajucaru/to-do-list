import React from "react";

import { Button } from "@chakra-ui/react";

const ButtonMain = ({ value }) => {
  return (
    <button
      size="md"
      height="48px"
      width="250px"
      border="2px"
      marginTop="20px"
      borderColor="blue.500"
      disabled={!value}
      type="submit"
    >
      Add
    </button>
  );
};

export default ButtonMain;
