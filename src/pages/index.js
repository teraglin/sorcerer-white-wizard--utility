import React from "react";

import {
  Box,
} from "@mui/material";

import { GameDisplay } from "../services/display/Header";
import { GameCounters } from "../services/counters/GameCounters";

const MainPage = (props) => {
  const { mobileView } = props;

  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <GameDisplay />
      <GameCounters mobileView={mobileView} />
    </Box>
  )
}

export default MainPage;