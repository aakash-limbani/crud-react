import React from "react";
import {
  moment,
  convertSystemTimezoneToIso,
  convertIsoToSystemTimezone,
} from "../utils/timezone"; // Import the configured Moment.js object

const Home = () => {
  // Get the current date and time in the user's system timezone
  const currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const todayTime = convertSystemTimezoneToIso(currentDateTime);
  const todayTimeISO = convertIsoToSystemTimezone(todayTime);
  return (
    <div style={{ color: "skyblue", fontSize: "75px", fontWeight: 700 }}>
      {" "}
      This is out Development side .<p>Current Time: {currentDateTime}</p>
      {todayTime}
      {todayTimeISO}
    </div>
  );
};

export default Home;
