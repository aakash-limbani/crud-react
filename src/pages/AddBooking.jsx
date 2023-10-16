import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import AddBookingForm from "../components/form/AddBookingForm";
const BookingPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Typography variant="h3">Add Booking</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AddBookingForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BookingPage;
