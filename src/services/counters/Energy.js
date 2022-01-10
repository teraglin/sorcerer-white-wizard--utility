import React, { useState } from "react";

import {
  Box,
} from "@mui/material";

import ValueCounter from '../../components/ValueCounter'
import { QuickButton } from "../../components/QuickButton";

export const Energy = () => {
  const [energy, setEnergy] = useState(6);

  const addFour = () => {
    const result = energy + 4;

    if (result > 10) {
      setEnergy(10);
    } else {
      setEnergy(result);
    }
  }

  const resetEnergy = () => {
    setEnergy(6);
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
        max={10}
        color="blue"
        counterName="Energy"
        value={energy}
        setValue={setEnergy}
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
          buttonAction={addFour}
          buttonLabel="ADD FOUR"
          color="blue"
        />
        <QuickButton
          buttonAction={resetEnergy}
          buttonLabel="RESET ENERGY"
          color="blue"
        />
      </Box>
    </Box>
  )
}