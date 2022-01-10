import React, {useState} from "react";

import {
  Box,
  Typography
} from "@mui/material";

import ValueCounter from '../../components/ValueCounter'

export const Actions = () => {
  const [actions, setActions] = useState(6);

  const resetActions = () => {
    setActions(6);
  }

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
        max={6}
        color="red"
        counterName="Actions"
        value={actions}
        setValue={setActions}
        />
      </Typography>
      <button onClick={resetActions}>Reset Actions</button>
    </Box>
  )
}