import React from "react";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import Typography from "@material-ui/core/Typography";

function TimeIntervalDropdown() {
  const classes = useStyles();
  return (
    <div className={classes.dropdown}>
      <Typography className={classes.selectValue}>This month</Typography>
      <KeyboardArrowDownIcon className={classes.arrow} />
    </div>
  );
}

export default TimeIntervalDropdown;

const useStyles = makeStyles((theme) => ({
  dropdown: {
      display: "flex",
      alignItems: "center",
      "&:hover": {
          cursor: "pointer",
      }
},
selectValue: {
    ...theme.typography.input,
    display: "inline",
    color: "#666666",
    
},
arrow: {
    width: "1.3rem",
    height: "1.3rem",
    marginLeft: "0.5rem",
    color: "#666666",
  },
}));
