import React from "react";

import {
  Box,
} from "@mui/material";

import { GameDisplay } from "../services/display/Header";
import { Energy } from "../services/counters/Energy";
import { Actions } from "../services/counters/Action";
import { Omens } from "../services/counters/Omens";

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
      <Box
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: mobileView ? "column" : "row",
        }}
      >
        <Energy />
        <Actions />
        <Omens />
      </Box>
    </Box>
  )
}

export default MainPage;