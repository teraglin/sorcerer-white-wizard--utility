
import React, { useState } from "react";

import {
  Box,
} from "@mui/material";

import ValueCounter from '../../components/ValueCounter'
import { QuickButton } from "../../components/QuickButton";

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
        padding: 2,
      }}
    >
        <ValueCounter
          min={0}
          max={undefined}
          color="grey"
          counterName="Omens"
          value={omens}
          setValue={setOmens}
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
          buttonAction={resetOmens}
          buttonLabel="RESET OMENS"
          color="grey"
        />
      </Box>
    </Box>
  )
}
