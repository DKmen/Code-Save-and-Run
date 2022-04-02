import React from "react";
import { Container, Grid } from "@material-ui/core";

import CourseCard from "../components/course";

import CourseDate from "../courses/data.json";

function AdminPage() {
  console.log(CourseDate)
  return (
    <Container maxWidth="md" mt={4}>
      <Grid container spacing={4}>
        {CourseDate["course"].map((item) => (
          <Grid item md={3}>
            <CourseCard title={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AdminPage;
