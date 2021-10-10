import { Fragment } from "react";
import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";
import GreetingBanner from "./GreetingBanner";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item md={12}>
        <GreetingBanner />
      </Grid>
      <Grid item container className={classes.panelMaster}>
        {/* Container for all the smaller panels */}
        <Grid item container direction="column" md={8}>
          <MainPanel />
        </Grid>
        <Grid item container direction="column" md={4}>
          <SidePanel />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  panelMaster: {
    // width: "100%",
    margin: "0 1.8125rem 1.75rem",
    position: "relative",
    top: "-65px",
  },
}));
