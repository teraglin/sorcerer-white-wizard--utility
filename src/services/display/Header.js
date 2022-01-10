import { Box, Typography } from "@mui/material"

export const GameDisplay = () => {
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >

      <Typography
        variant="h3"
        style={{ textAlign: "center" }}
      >
        Sorcerer Playmat
      </Typography>
      <Typography
        variant="h5"
        style={{ textAlign: "center" }}
      >
        VICTORIES
      </Typography>

    </Box>
  )
}