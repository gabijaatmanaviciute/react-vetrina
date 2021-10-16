import { Fragment, useState } from "react";
import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";
import GreetingBanner from "./GreetingBanner";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import CustomerChatPopUp from "../../layout/customer_support/CustomerChatPopUp";

const Dashboard = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const classes = useStyles();

  const popUpOpenHandler = () => {
    setShowPopUp(true);
  }
  const popUpCloseHandler = () => {
    setShowPopUp(false);
  }

  return (
    <Fragment>
      <Grid item md={12}>
        <GreetingBanner />
      </Grid>
      <Grid item container className={classes.panelMaster}>
        {/* Container for all the smaller panels */}
        <Grid item container direction="column" md={8}>
          <MainPanel popUpOpenHandler={popUpOpenHandler} />
        </Grid>
        <Grid item container direction="column" md={4}>
          <SidePanel popUpOpenHandler={popUpOpenHandler}/>
        </Grid>
        {showPopUp && <CustomerChatPopUp popUpCloseHandler={popUpCloseHandler} />}
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
