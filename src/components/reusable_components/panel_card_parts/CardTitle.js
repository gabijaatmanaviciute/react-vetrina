import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

function CardTitle({ icon, title }) {
  const classes = useStyles();
  return (
    <div className={classes.panelTitle}>
      <div className={classes.panelIcon}>
          {icon}
      </div>
      <Typography variant="h4">{title}</Typography>
    </div>
  );
}

export default CardTitle;

const useStyles = makeStyles((theme) => ({
  panelIcon: {
    width: "1.25rem",
    height: "1.25rem",
    marginRight: "1rem",
  },
  panelTitle: {
    display: "flex",
    alignItems: "center",
  },
}));
