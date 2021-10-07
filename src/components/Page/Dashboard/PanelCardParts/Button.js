import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function Button({ text }) {
  const classes = useStyles();
  return (
    <button type="button" className={classes.normalButton}>
      <Typography variant="button">{text}</Typography>
    </button>
  );
}

export default Button;

const useStyles = makeStyles(theme => ({
  normalButton: {
      padding: "0.9375rem 3.25rem",
      color: theme.palette.common.white,
      borderRadius: "5px",
      background: theme.palette.primary.main,
      boxShadow: "0 4px 8px rgba(50, 50, 71, 0.06), 0 4px 4px rgba(50, 50, 71, 0.08)",
      border: "none",
      "&:hover": {
          cursor: "pointer"
      }
  },
}));
