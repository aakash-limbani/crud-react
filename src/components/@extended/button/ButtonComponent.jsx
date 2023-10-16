import { Button } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import "./../button/buttoncomponent.css";

const ButtonComponent = (props) => {
  const {
    name,
    isIcon = false,
    OnlyIcon,
    Icon,
    type = "button",
    EndIcon,
    variant,
    isName = false,
    className,
    onClick,
    size = "small",
    color = "primary",
    disabledbtn,
  } = props;
  return (
    <>
      {/* <Grid item xs={12} className="profile-form-main-input"> */}
      <Button
        variant={variant ? variant : "contained"}
        disableElevation
        size={size}
        type={type}
        color={color}
        className={className}
        onClick={() => {
          if (onClick && typeof (onClick || "") === "function") {
            onClick();
          }
        }}
        endIcon={EndIcon ? <EndIcon /> : <></>}
        startIcon={Icon ? <Icon /> : <></>}
        disabled={disabledbtn ? true : false}
      >
        {isIcon && <OnlyIcon className="icon-box-main" />}
        {isName && name}
      </Button>
      {/* </Grid> */}
    </>
  );
};
ButtonComponent.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  isIcon: PropTypes.bool,
  isName: PropTypes.bool,
  Icon: PropTypes.any,
  OnlyIcon: PropTypes.any,
  EndIcon: PropTypes.any,
  onClick: PropTypes.any,
  disabledbtn: PropTypes.any,
};
export default ButtonComponent;
