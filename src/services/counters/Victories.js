import React, { useState } from "react";

import {
  Box,
} from "@mui/material";

import ValueCounter from '../../components/ValueCounter'
import { QuickButton } from "../../components/QuickButton";

export const Victories = () => {
  const [victories, setVictories] = useState(0);

  const resetVictories = () => {
    setVictories(0);
  };

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <ValueCounter
        min={0}
        max={3}
        color="orange"
        counterName="Victories"
        value={victories}
        setValue={setVictories}
      />
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <QuickButton
          buttonAction={resetVictories}
          buttonLabel="RESET VICTORIES"
          color="orange"
        />
      </Box>
    </Box>
  )
}