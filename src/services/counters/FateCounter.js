import React, { useState } from "react";

import {
  Box,
  Typography
} from "@mui/material";

import { QuickButton } from "../../components/QuickButton";

export const FateCounter = () => {
  const [fate, setFate] = useState(true);

  const handleFate = () => {
    if (fate) {
      setFate(false);
    } else {
      setFate(true);
    }
  };

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "purple",
        padding: 2,
      }}
    >
      <Typography
        variant="h5">
        Fate Counter
      </Typography>
      <QuickButton
        buttonAction={handleFate}
        buttonLabel={fate ? "FULL" : "EMPTY"}
        color="purple"
      />
    </Box>
  )
}