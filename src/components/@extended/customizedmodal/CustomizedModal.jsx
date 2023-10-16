import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./../customizedmodal/customizedmodal.css";
import PropTypes from "prop-types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedModal = (props) => {
  const { children, onClick, open, heading, isHeadingName, Icon, isIcon } =
    props;

  return (
    <Box>
      <BootstrapDialog aria-labelledby="customized-dialog-title" open={open}>
        <Box className="modal-header-main">
          <Typography
            padding={2}
            onClick={onClick}
            className="modal-heading-name"
          >
            {isIcon ? (
              <Icon style={{ marginRight: "10px", color: "#FBC267" }} />
            ) : (
              <></>
            )}{" "}
            {isHeadingName ? heading : ""}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onClick}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent dividers>{children}</DialogContent>
      </BootstrapDialog>
    </Box>
  );
};
CustomizedModal.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.any,
  open: PropTypes.any,
  isHeadingName: PropTypes.bool,
  isIcon: PropTypes.bool,
  Icon: PropTypes.any,
  heading: PropTypes.string,
};
export default CustomizedModal;
