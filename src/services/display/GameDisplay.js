import { Box, Typography } from "@mui/material"

export const GameDisplay = (props) => {
  const {
    energyNum
  } = props;

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          style={{ textAlign: "center" }}
        >
          HEADING
        </Typography>
        <Typography
          variant="h5"
          style={{ textAlign: "center" }}
        >
          VICTORIES
        </Typography>
      </Box>
      <Box
        style={{
          width: "100",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>ENERGY: {energyNum}</Typography>
        </Box>
        <Box
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>ACTION</Typography>
        </Box>
      </Box>
    </Box>
  )
}