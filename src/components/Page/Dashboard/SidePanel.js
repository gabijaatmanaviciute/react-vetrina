import { Fragment } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import CustomerSupport from "./PanelCards/CustomerSupport";
import InviteFriend from "./PanelCards/InviteFriend";
import ConfigureYourShop from "./PanelCards/ConfigureYourShop";
import TrustPilot from "./PanelCards/Trustpilot";


const SidePanel = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item className={classes.gridItem}>
        <Card className={classes.panelCard}>
        <ConfigureYourShop />
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.panelCard} id="trustpilot">
          <TrustPilot />
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.panelCard}>
          <InviteFriend />
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.panelCard}>
          <CustomerSupport />
        </Card>
      </Grid>
    </Fragment>
  );
};

export default SidePanel;

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: "0.75rem",
    "& #trustpilot": {
      background: "#000032",
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
