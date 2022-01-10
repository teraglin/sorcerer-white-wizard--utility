import React from "react";

import {
  Box,
} from "@mui/material";

import { GameDisplay } from "../services/display/GameDisplay";
import { Energy } from "../services/energy/Energy";
import { Actions } from "../services/action/Action";

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
      </Box>
    </Box>
  )
}

export default MainPage;