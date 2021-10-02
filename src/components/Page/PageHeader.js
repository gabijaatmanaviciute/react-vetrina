import HeaderNotification from "./PageHeaderNotification";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography className={classes.toolbarTitle}>Dashboard</Typography>
        <HeaderNotification className={classes.headerNotification} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles({
  header: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    height: "3.75rem",
    background: "#FFFFFF",
    boxShadow: "none",
  },
  toolbarTitle: {
    flex: 1,
    margin: "0 1rem",
    fontFamily: "Noto Sans HK",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "1.0625rem",
    lineHeight: "1.375rem",
    color: "#103B66",
  },
  headerNotification: {
    color: "#103B66",
  },
});
