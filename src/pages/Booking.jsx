import React, { useCallback, useEffect, useState } from "react";
import { Grid, Box, Button, Link } from "@mui/material";
import CommonTable from "./../components/@extended/table/CommonTable";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ButtonComponent from "./../components/@extended/button/ButtonComponent";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link as RouterLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { BOOKING, DELETE_BOOKING } from "../actions/bookingActions";
import DeleteModal from "./../components/@extended/deletemodal/DeleteModal";
import CustomizedModal from "./../components/@extended/customizedmodal/CustomizedModal";
import AddBookingForm from "../components/form/AddBookingForm";

const Booking = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const isSuccess = useSelector((data) => data?.auth?.isSuccess);
  const bookingList = useCallback((values) => {
    dispatch({ type: BOOKING, payload: values });
  }, []);

  useEffect(() => {
    bookingList();
  }, [isSuccess]);

  const deleteBooking = useCallback((data) => {
    dispatch({ type: DELETE_BOOKING, payload: data });
  }, []);

  const lists = useSelector((data) => data?.auth?.bookingList);
  console.log("lists ==>", lists);

  const columns = [
    {
      field: "personName",
      headerName: "Name",
      flex: 1,
      headerClassName: "paymentDrawer-header",
      id: 1,
    },
    {
      field: "numberOfPerson",
      headerName: "Number Of Person",
      flex: 1,
      headerClassName: "paymentDrawer-header",
      id: 2,
    },
    {
      field: "bookingType",
      headerName: "Booking Type",
      flex: 1,
      headerClassName: "paymentDrawer-header",
      id: 3,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      flex: 1,
      headerClassName: "paymentDrawer-header",
      id: 4,
    },
    {
      field: "bookingTime",
      headerName: "Booking Date",
      flex: 1,
      headerClassName: "paymentDrawer-header",
      id: 5,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      disableClickEventBubbling: true,
      headerClassName: "paymentDrawer-header",
      id: 6,
      renderCell: (params) => {
        return (
          <Box className="currencies-table-btn-main">
            <ButtonComponent
              className="btn-update1"
              isIcon={true}
              OnlyIcon={BorderColorIcon}
              onClick={() => {
                setOpen(true);
                setBookingDetails(params?.row);
                setId(params?.row?.rowId);
              }}
            />
            <ButtonComponent
              className="btn-update1"
              isIcon={true}
              OnlyIcon={DeleteOutlineIcon}
              onClick={() => {
                setDeleteModal(true);
                setId(params?.row?.rowId);
              }}
            />
          </Box>
        );
      },
    },
  ];

  const rows = lists?.map((list, ind) => {
    return {
      id: ind,
      personName: list.personName,
      bookingType: list.bookingType,
      bookingTime: list.bookingTime,
      mobile: list.mobile,
      numberOfPerson: list.numberOfPerson,
      rowId: list.id,
    };
  });
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xl={1}>
          <Button fullWidth size="large" variant="contained" color="warning">
            <Link to="/add" component={RouterLink}>
              Add Booking
            </Link>
          </Button>
        </Grid>
        <Grid item xl={12}>
          <CommonTable columns={columns} rows={rows} />
        </Grid>
        {deleteModal && (
          <DeleteModal
            isIcon={true}
            Icon={ErrorOutlineOutlinedIcon}
            open={deleteModal}
            onClick={() => {
              setDeleteModal(false);
              setId("");
            }}
            id={id}
            deleteData={deleteBooking}
          />
        )}
        {open && (
          <CustomizedModal
            isHeadingName={true}
            heading={"Edit Booking"}
            open={open}
            onClick={() => {
              setOpen(false);
              setId("");
            }}
          >
            <AddBookingForm
              onClick={() => {
                setOpen(false);
                setId("");
              }}
              bookingDetails={bookingDetails}
              id={id}
            />
          </CustomizedModal>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Booking;
