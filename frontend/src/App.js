import React, { useState } from "react";
import { Container } from "@material-ui/core";
import CodeInput from "./components/CodeInput";
import FunctionContainer from "./components/Container";

function App() {

  const [functionIdArray , setFunctionIdArray] = useState([]);

  return (
    <Container>
      <CodeInput idArray={functionIdArray} addArray={setFunctionIdArray}/>
      <FunctionContainer idArray={functionIdArray}/>
    </Container>
  );
}

export default App;
