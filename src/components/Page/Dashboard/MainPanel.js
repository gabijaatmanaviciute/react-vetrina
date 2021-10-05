import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import { ReactComponent as NewAppIcon } from "assets/icons/new-app-icon.svg";
import { ReactComponent as FileTextIcon } from "assets/icons/file-text-icon.svg";
import Visitors from "./PanelCards/Visitors";
import Orders from "./PanelCards/Orders";
import AppAd from "./PanelCards/AppAd";

const MainPanel = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item container className={classes.gridRow}>
        <Grid item className={classes.gridItem} md={6}>
          <Card className={classes.panelCard}>
            <Visitors />
          </Card>
        </Grid>
        <Grid item className={classes.gridItem} md={6}>
          <Card className={classes.panelCard}>
            <Orders />
          </Card>
        </Grid>
      </Grid>
      <Grid item container className={classes.gridRow}>
        <Grid item className={classes.gridItem} md={6}>
          <AppAd />
        </Grid>
        <Grid item className={classes.gridItem} md={6}>
          <Card className={classes.panelCard}>
            <ExtensionsMarketplace />
          </Card>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.panelCard}>
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
  panelCard: {
    ...theme.panelCard,
  },
  panelIcon: {
    width: "1.25rem",
    height: "1.25rem",
  },
}));
