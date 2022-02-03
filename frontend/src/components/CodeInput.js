import React, { useState } from "react";
import { Button, Container, TextField, Grid, Select } from "@material-ui/core";
import axios from "axios";

function CodeInput(props) {
  const [inputCode, setInputCode] = useState("");
  const [functionName, setFunctinName] = useState("");
  const [inputCategory, setCategory] = useState("A");

  async function summitData() {
    const data = await axios.post("http://localhost:3050/addFunction", {
      function: inputCode,
      category: inputCategory,
      functionName: functionName,
    });

    setInputCode("");
    setFunctinName("");

    props.addArray([...props.idArray, data.data]);
  }

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item md={8} sm={6} xs={12}>
          <TextField
            size="medium"
            margin="normal"
            variant="outlined"
            placeholder="Enter your function name"
            label="Function Name"
            onChange={(event) => setFunctinName(event.target.value)}
            defaultValue={functionName}
            value={functionName}
            fullWidth
          />
        </Grid>
        <Grid item md={3} sm={5} xs={12}>
          <Select
            variant="outlined"
            color="primary"
            onChange={(event) => setCategory(event.target.value)}
            fullWidth
            style={{ marginTop: 8 }}
          >
            <option value={"A"}>Category A</option>
            <option value={"B"}>Category B</option>
            <option value={"C"}>Category C</option>
            <option value={"D"}>Category D</option>
          </Select>
        </Grid>
      </Grid>
      <TextField
        size="medium"
        margin="normal"
        variant="outlined"
        placeholder="Enter your function here"
        label="Java Script Code"
        multiline
        rows={4}
        defaultValue={inputCode}
        value={inputCode}
        onChange={(event) => setInputCode(event.target.value)}
        fullWidth
      />
      <Button variant="outlined" color="primary" onClick={summitData}>
        Save IT
      </Button>
    </Container>
  );
}

export default CodeInput;
