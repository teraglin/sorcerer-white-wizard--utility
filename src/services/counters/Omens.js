
import React, { useState } from "react";

import {
  Box,
  Typography
} from "@mui/material";

import ValueCounter from '../../components/ValueCounter'

export const Omens = () => {
  const [omens, setOmens] = useState(1);

  const resetOmens = () => {
    setOmens(1);
  };

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
      >
        <ValueCounter
          min={0}
          max={undefined}
          color="grey"
          counterName="Omens"
          value={omens}
          setValue={setOmens}
        />
      </Typography>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button onClick={resetOmens}>Reset Omens</button>
      </Box>
    </Box>
  )
}
