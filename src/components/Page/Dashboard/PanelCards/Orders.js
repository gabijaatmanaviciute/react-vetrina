import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as ListIcon } from "assets/icons/list-icon.svg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDownRounded";

function Orders() {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item className={classes.panelHeader}>
        <div className={classes.panelTitle}>
          <ListIcon className={classes.panelIcon} />
          <Typography variant="h4">Orders</Typography>
        </div>
        <div className={classes.dropdown}>
          <Typography variant="input">This month</Typography>
          <KeyboardArrowDownIcon />
        </div>
      </Grid>
      <Grid item cotainer className={classes.panelContent}>
        <Grid item className={classes.orderRow}>
          <Typography variant="h5" className={classes.statLabel}>
            Orders received:
          </Typography>
          <Typography variant="h5">156</Typography>
        </Grid>
        <Grid item className={classes.orderRow}>
          <Typography variant="h5" className={classes.statLabel}>
            Earnings:
          </Typography>
          <Typography variant="h5">€ 1893,24</Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.panelFooter}>
        <Typography>10 free tips to increase your sales</Typography>
      </Grid>
    </Grid>
  );
}

export default Orders;

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
    margin: "1.5rem 0",
  },
  orderRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.75rem",
  },
  statLabel: {
    fontWeight: 400,
    color: "#6C7C8C",
  },
  panelFooter: {
    marginTop: "0.3125rem",
    display: "flex",
    justifyContent: "space-between",
    "& .MuiTypography-body1": {
      ...theme.typography.panelLinks,
    },
  },
}));
