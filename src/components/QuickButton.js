export const QuickButton = (props) => {
  const {
    buttonAction,
    buttonLabel,
    color,
  } = props;

  return (
    <button
      onClick={buttonAction}
      style={{
        width: "80%",
        height: 50,
        color: "white",
        background: color,
        border: "none",
        borderRadius: "5px",
        margin: 10,
        cursor: "pointer",
      }}
    >
      {buttonLabel}
    </button>
  )
}