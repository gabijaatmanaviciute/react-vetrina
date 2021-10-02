import Toolbar from "./Toolbar";
import GreetingBanner from "./GreetingBanner";
import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Toolbar></Toolbar>
      <GreetingBanner></GreetingBanner>
      <MainPanel></MainPanel>
      <SidePanel></SidePanel>
    </Grid>
  );
};

export default Dashboard;

const useStyles = makeStyles({});
