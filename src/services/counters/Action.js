import React, {useState} from "react";

import {
  Box,
} from "@mui/material";

import ValueCounter from '../../components/ValueCounter'
import { QuickButton } from "../../components/QuickButton";

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
      padding: 2,
    }}
    >
        <ValueCounter
        min={0}
        max={6}
        color="red"
        counterName="Actions"
        value={actions}
        setValue={setActions}
        />
        <QuickButton
          buttonAction={resetActions}
          buttonLabel="RESET ACTIONS"
          color="red"
        />
    </Box>
  )
}