import React, { useState } from "react";

import {
  Box,
  Typography,
} from "@mui/material";

import { GameDisplay } from "../services/display/GameDisplay";

const MainPage = () => {
  const [energyNum, setEnergyNum] = useState(0)

  return (
    <Box
     style={{
       width: "100%",
       height: "100%",
     }}
    >
      <GameDisplay
        energyNum={energyNum}
      />
      <Box
      sx={{bgcolor: energyNum === 1 ? "blue" : undefined}}
      style={{cursor: 'pointer'}}
      onClick={() => setEnergyNum(1)}
      >1</Box>
      <Box
      sx={{bgcolor: energyNum === 0 ? "blue" : undefined}}
      style={{cursor: 'pointer'}}
      onClick={() => setEnergyNum(0)}
      >0</Box>
    </Box>
  )
}

export default MainPage;