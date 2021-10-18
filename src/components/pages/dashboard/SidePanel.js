import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import CustomerSupport from "./dashboard_cards/CustomerSupport";
import InviteFriend from "./dashboard_cards/InviteFriend";
import ConfigureYourShop from "./dashboard_cards/ConfigureYourShop";
import TrustPilot from "./dashboard_cards/Trustpilot";

const SidePanel = ({ popUpOpenHandler }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item className={classes.gridItem}>
        <ConfigureYourShop />
      </Grid>
      <Grid item className={classes.gridItem}>
        <TrustPilot />
      </Grid>
      <Grid item className={classes.gridItem}>
          <InviteFriend />
      </Grid>
      <Grid item className={classes.gridItem}>
        <CustomerSupport popUpOpenHandler={popUpOpenHandler} />
      </Grid>
    </Fragment>
  );
};

export default React.memo(SidePanel);

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: "0.75rem",
  },
}));
