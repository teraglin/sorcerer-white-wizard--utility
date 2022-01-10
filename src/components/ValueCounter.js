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
  const buttonStyle = {
    width: 50,
    height: 50,
    color: "white",
    background: color,
    border: "none",
    borderRadius: "200px",
    cursor: "pointer",
  }

  const handleSubtract = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  const handleAdd = () => {
    setValue(value + 1);
    if (max && value >= max) {
      setValue(max);
    }
  };

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        color: color,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 5,
      }}
    >
      <Typography variant="h5">
        {counterName}
      </Typography>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >

        <button
          onClick={handleSubtract}
          style={buttonStyle}
        >
          -
        </button>
        <Typography
          variant="h5"
          style={{ textAlign: "center" }}
        >
          {value}
        </Typography>
        <button
          onClick={handleAdd}
          style={buttonStyle}
        >
          +
        </button>
      </Box>
    </Box>
  )
}

export default ValueCounter;