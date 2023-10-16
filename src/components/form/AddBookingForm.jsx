import { useCallback, useEffect } from "react";
// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import PropTypes from "prop-types";
// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

// project import
import AnimateButton from "../@extended/AnimateButton";
import { ADD_BOOKING, UPDATE_BOOKING } from "../../actions/bookingActions";

// assets
import { useDispatch, useSelector } from "react-redux";

const AddBooking = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSuccess = useSelector((data) => data?.auth?.isSuccess);
  console.log("isSuccess ==>", isSuccess);
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  const addBookingForm = useCallback((values) => {
    dispatch({ type: ADD_BOOKING, payload: values });
  }, []);

  const editBookingForm = useCallback((values) => {
    console.log("values ==> ", values);
    dispatch({ type: UPDATE_BOOKING, payload: values });
  }, []);

  return (
    <>
      <Formik
        initialValues={
          props.bookingDetails
            ? { ...props.bookingDetails }
            : {
                personName: "",
                numberOfPerson: "",
                mobile: "",
                bookingType: "",
                bookingTime: "",
              }
        }
        validationSchema={Yup.object().shape({
          personName: Yup.string().max(255).required("Name is required"),
          numberOfPerson: Yup.string()
            .max(255)
            .required("Number of Person is required"),
          mobile: Yup.string().max(255).required("Mobile is required"),
          bookingTime: Yup.string().required("Booking Date is required"),
        })}
        onSubmit={async (values) => {
          if (props?.id) {
            console.log(
              "props?.bookingDetails?.rowId ==>",
              props?.bookingDetails,
            );
            editBookingForm({
              id: props?.bookingDetails?.rowId,
              ...values,
            });
          } else {
            addBookingForm({
              ...values,
            });
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="personName">Name*</InputLabel>
                  <OutlinedInput
                    id="personName-login"
                    type="personName"
                    value={values.personName}
                    name="personName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.personName && errors.personName)}
                  />
                  {touched.personName && errors.personName && (
                    <FormHelperText error id="helper-text-personName">
                      {errors.personName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="numberOfPerson">
                    Number Of Person*
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(
                      touched.numberOfPerson && errors.numberOfPerson,
                    )}
                    id="numberOfPerson"
                    type="number"
                    value={values.numberOfPerson}
                    name="numberOfPerson"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="2"
                    inputProps={{}}
                  />
                  {touched.numberOfPerson && errors.numberOfPerson && (
                    <FormHelperText error id="helper-text-numberOfPerson">
                      {errors.numberOfPerson}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="bookingType">Booking Type*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.bookingType && errors.bookingType)}
                    id="bookingType"
                    value={values.bookingType}
                    name="bookingType"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Ac / Regular"
                    inputProps={{}}
                  />
                  {touched.bookingType && errors.bookingType && (
                    <FormHelperText error id="helper-text-bookingType">
                      {errors.bookingType}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="mobile">Mobile*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.mobile && errors.mobile)}
                    id="mobile"
                    type="text"
                    value={values.mobile}
                    name="mobile"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="9586973710"
                    inputProps={{}}
                  />
                  {touched.mobile && errors.mobile && (
                    <FormHelperText error id="helper-text-mobile">
                      {errors.mobile}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="bookingTime">Booking Time*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.bookingTime && errors.bookingTime)}
                    id="bookingTime"
                    type={"date"}
                    value={values.bookingTime}
                    name="bookingTime"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Time"
                  />
                  {touched.bookingTime && errors.bookingTime && (
                    <FormHelperText error id="helper-text-bookingTime">
                      {errors.bookingTime}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Save
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

AddBooking.propTypes = {
  bookingDetails: PropTypes.any,
  id: PropTypes.any,
};

export default AddBooking;
