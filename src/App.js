import { Fragment } from "react";
import Dashboard from "./components/Page/Dashboard/Dashboard";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import { makeStyles } from "@material-ui/core/styles";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideDrawer />
      <Dashboard />
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  root: {
    display: "flex"
  }
})