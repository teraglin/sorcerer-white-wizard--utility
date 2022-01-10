import {
  Box,
} from "@mui/material";

import { Energy } from "./Energy";
import { Actions } from "./Action";
import { Omens } from "./Omens";
import { Victories } from './Victories'
import { FateCounter } from "./FateCounter";

export const GameCounters = (props) => {
  const { mobileView } = props;
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: mobileView ? "column" : "row",
        }}
      >
        <Energy />
        <Actions />
        <Omens />
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: mobileView ? "column" : "row",
        }}
      >
        <Victories />
        <FateCounter />
      </Box>
    </Box>
  )
}