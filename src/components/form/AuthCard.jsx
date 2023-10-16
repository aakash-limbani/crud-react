import PropTypes from "prop-types";

// material-ui
import { Box } from "@mui/material";

// project import

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

const AuthCard = ({ children }) => (
  <Box
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      border: "1px solid #e6ebf1",
      borderRadius: 2,
      background: "#fff",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)  ",
    }}
  >
    <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
  </Box>
);

AuthCard.propTypes = {
  children: PropTypes.node,
};

export default AuthCard;
