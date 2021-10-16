import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import Visitors from "./dashboard_cards/Visitors";
import Orders from "./dashboard_cards/Orders";
import AppAd from "./dashboard_cards/AppAd";
import ExtensionsMarketplace from "./dashboard_cards/ExtensionsMarketplace";
import LatestNews from "./dashboard_cards/LatestNews";

const MainPanel = ({popUpOpenHandler}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item container className={classes.gridRow1}>
        <Grid item className={classes.gridItem} md={6}>
            <Visitors popUpOpenHandler={popUpOpenHandler} />
        </Grid>
        <Grid item className={classes.gridItem} md={6}>
          <Card>
            <Orders />
          </Card>
        </Grid>
      </Grid>
      <Grid item container className={classes.gridRow2}>
        <Grid item className={classes.gridItem} md={6}>
          <Card id="app_ad">
            <AppAd />
          </Card>
        </Grid>
        <Grid item className={classes.gridItem} md={6}>
          <Card>
            <ExtensionsMarketplace />
          </Card>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card>
          <LatestNews />
        </Card>
      </Grid>
    </Fragment>
  );
};

export default MainPanel;

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: "0.75rem",
    "& #app_ad": {
      background: "#F3A35C",
    },
  },
  panelIcon: {
    width: "1.25rem",
    height: "1.25rem",
  },
}));
