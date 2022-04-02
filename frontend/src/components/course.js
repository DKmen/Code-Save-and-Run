import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard(props) {
  const data = require(`../courses/${props.title}/info.json`);
  console.log(data);
  return (
    <Card>
      <CardHeader title={props.title} />
      <CardActionArea>
        <CardMedia src={data.image} component="img" height={200} />
      </CardActionArea>
      <CardContent>
        <Typography>{data.description.substring(0, 20)}</Typography>
      </CardContent>
      <Link to={`/course/${props.title}`}>Go to Course</Link>
    </Card>
  );
}
