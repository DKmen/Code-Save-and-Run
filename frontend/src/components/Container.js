import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";

function FunctionSubContainer(props) {
  return (
    <Box margin={2}>
      <Typography variant="h4" display="block" style={{ marginBottom: 4 }}>
        Category {props.category}
      </Typography>
      <Divider />
      {props.idArray.length !== 0
        ? props.idArray.map((item) => {
            if (item.category === props.category)
              return (
                <Box margin={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.getOutput(item.id)}
                    fullWidth
                  >
                    {item.name}
                  </Button>
                </Box>
              );
            else return null;
          })
        : null}
    </Box>
  );
}

function FunctionContainer(props) {
  const [outputData, setOutputData] = useState("");
  const [open, setOpen] = useState(false);

  async function getOutput(id) {
    const data = await axios.get(`http://localhost:3050/getFunction/${id}`);
    setOutputData(data.data.responce);
    setOpen(true);
  }

  return (
    <Container component={Box} m={4}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle>Output</DialogTitle>
        <DialogContent>
          <Box marginBottom={2}>
            <Typography variant="h4">{outputData}</Typography>
          </Box>
        </DialogContent>
      </Dialog>
      <Grid container justifyContent="space-between">
        <Grid item md={3} xl={3} sm={6} xm={12}>
          <FunctionSubContainer
            idArray={props.idArray}
            category="A"
            getOutput={getOutput}
          />
        </Grid>
        <Grid item md={3} xl={3} sm={6} xm={12}>
          <FunctionSubContainer
            idArray={props.idArray}
            category="B"
            getOutput={getOutput}
          />
        </Grid>
        <Grid item md={3} xl={3} sm={6} xm={12}>
          <FunctionSubContainer
            idArray={props.idArray}
            category="C"
            getOutput={getOutput}
          />
        </Grid>
        <Grid item md={3} xl={3} sm={6} xm={12}>
          <FunctionSubContainer
            idArray={props.idArray}
            category="D"
            getOutput={getOutput}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default FunctionContainer;
