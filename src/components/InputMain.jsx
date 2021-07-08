import React from "react";
import { Input } from "@chakra-ui/react";

const InputMain = ({ value, setValue }) => {
  return (
    <Input
      marginTop="30px"
      width="100%"
      placeholder="Add your activity here"
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default InputMain;
