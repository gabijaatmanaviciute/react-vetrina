import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import Visitors from "./dashboard_cards/Visitors";
import Orders from "./dashboard_cards/Orders";
import AppAd from "./dashboard_cards/AppAd";
import ExtensionsMarketplace from "./dashboard_cards/ExtensionsMarketplace";
import LatestNews from "./dashboard_cards/LatestNews";

const MainPanel = ({ popUpOpenHandler }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item container>
        <Grid item className={classes.gridItem} md={6}>
          <Visitors popUpOpenHandler={popUpOpenHandler} />
        </Grid>
        <Grid item className={classes.gridItem} md={6}>
          <Orders />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item className={classes.gridItem} md={6}>
          <AppAd />
        </Grid>
        <Grid item className={classes.gridItem} md={6}>
          <ExtensionsMarketplace />
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <LatestNews />
      </Grid>
    </Fragment>
  );
};

export default MainPanel;

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: "0.75rem",
  },
}));
