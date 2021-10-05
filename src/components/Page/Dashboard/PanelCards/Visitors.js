import React from "react";
import { ReactComponent as EyeIcon } from "assets/icons/eye-icon.svg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

function Visitors() {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item className={classes.panelHeader}>
        <div className={classes.panelTitle}>
          <EyeIcon className={classes.panelIcon} />
          <Typography variant="h4">Visitors</Typography>
        </div>
        <div className={classes.dropdown}>
          <Typography variant="input">This month</Typography>
          <KeyboardArrowDownIcon />
        </div>
        
      </Grid>
      <Grid item>
        <Typography className={classes.panelContent}>1824</Typography>
      </Grid>
      <Grid item className={classes.panelFooter}>
        <Typography>Do you want more visits? Contact us!</Typography>
        <ArrowForwardRoundedIcon className={classes.linkIcon} />
      </Grid>
    </Grid>
  );
}

export default Visitors;

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
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  panelContent: {
    fontSize: "2.625rem",
    lineHeight: "3.8125rem",
    fontWeight: 500,
    margin: "1.875rem 0",
  },
  panelFooter: {
    display: "flex",
    justifyContent: "space-between",
    "& .MuiTypography-body1": {
      ...theme.typography.panelLinks,
    },
  },
  linkIcon: {
    width: "1.25rem",
    height: "1.25rem",
    color: theme.typography.panelLinks.color
  },
}));
