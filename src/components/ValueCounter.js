import {
  Box,
  Typography
} from "@mui/material";

const ValueCounter = ({
  min,
  max,
  color,
  counterName,
  value,
  setValue
}) => {
  const handleSubtract = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  const handleAdd = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  return (
    <Box
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      color: color,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <button onClick={handleSubtract}>
        -
      </button>
      <Typography
      variant="body1"
      style={{textAlign: "center"}}
      >
        {counterName}: {value}
      </Typography>
      <button onClick={handleAdd}>
        +
      </button>
    </Box>
  )
}

export default ValueCounter;