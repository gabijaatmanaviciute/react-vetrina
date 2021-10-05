import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";
import Header from "../PageHeader";
import GreetingBanner from "./GreetingBanner";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" className={classes.page}>
      <Grid item>
        <Header />
      </Grid>
      <Divider className={classes.headerDivider} />
      <Grid item container>
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
      </Grid>
    </Grid>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  page: {
    background: theme.palette.background.hoverGrey,
  },
  headerDivider: {
    background: "rgba(0, 0, 0, 0.24)",
  },
  panelMaster: {
    // width: "100%",
    margin: "0 1.8125rem 1.75rem",
    position: "relative",
    top: "-65px"
  },
}));
