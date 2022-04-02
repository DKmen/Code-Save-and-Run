import React, { useState } from "react";
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core";
import VideoPlayer from "react-video-js-player";
// import ReactPlayer from "react-player";

import { useParams } from "react-router-dom";
// import Videos from "../courses/python/video";

const VideoPlayerMake = (props) => {
  let { name } = useParams();
  const Videos = require(`../courses/${name}/video`);
  const video = require(`../courses/${name}/video/${Videos[props.index]}`);
  return <VideoPlayer src={video} width="500" height="420" />;
};

function DashbordPage() {
  const [index, setIndex] = useState(0);
  let { name } = useParams();
  const Videos = require(`../courses/${name}/video`);
  return (
    <Container maxWidth="md" mt={4}>
      <Grid container justifyContent="space-between">
        <Grid item md={8}>
          <Box>
            {Videos.map((item, inx) => (
              <div style={{ display: `${inx === index ? "block" : "none"}` }}>
                <VideoPlayerMake index={inx} />
              </div>
            ))}
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box>
            <List>
              {Videos.map((item, inx) => (
                <ListItem
                  button
                  onClick={async () => {
                    setIndex(inx);
                  }}
                >
                  <ListItemText primary={`${item}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashbordPage;
