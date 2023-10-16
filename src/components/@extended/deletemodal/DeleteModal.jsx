import { Box } from "@mui/material";
import React from "react";
import CustomizedModal from "../customizedmodal/CustomizedModal";
import ButtonComponent from "../button/ButtonComponent";
import PropTypes from "prop-types";
import "./../deletemodal/deleteModal.css";

const DeleteModal = (props) => {
  const { onClick, open, isIcon, Icon, deleteData, id } = props;
  return (
    <Box>
      <CustomizedModal
        isHeadingName={true}
        heading="Delete?"
        open={open}
        onClick={onClick}
        isIcon={isIcon}
        Icon={Icon}
      >
        <Box>
          <Box className="delete-msg-box">
            {" "}
            Are you sure you want to delete this data?
          </Box>
          <Box>
            <Box className="delete-modal-btn-wrapper">
              <ButtonComponent
                name="No"
                isName={true}
                className="background-white"
                onClick={onClick}
              />
              <ButtonComponent
                name="Yes"
                isName={true}
                type="submit"
                onClick={() => {
                  deleteData(id);
                  onClick();
                  // listData();
                }}
              />
            </Box>
          </Box>
        </Box>
      </CustomizedModal>
    </Box>
  );
};
DeleteModal.propTypes = {
  onClick: PropTypes.any,
  open: PropTypes.any,
  isIcon: PropTypes.any,
  Icon: PropTypes.any,
  deleteData: PropTypes.any,
  id: PropTypes.any,
};

export default DeleteModal;
