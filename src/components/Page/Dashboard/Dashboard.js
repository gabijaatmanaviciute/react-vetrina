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
        <Grid item xs={12}>
          <GreetingBanner />
        </Grid>
        <Grid item container>
          <Grid item xs={8}>
            <MainPanel />
          </Grid>
          <Grid item xs={4}>
            <SidePanel />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

const useStyles = makeStyles({
  headerDivider: {
    background: "rgba(0, 0, 0, 0.24)",
  }
});
