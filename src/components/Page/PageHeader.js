import PageHeaderNotification from "./PageHeaderNotification";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const PageHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography className={classes.toolbarTitle}>Dashboard</Typography>
        <PageHeaderNotification className={classes.headerNotification} />
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;

const useStyles = makeStyles({
  header: {
    height: "3.75rem",
    background: "#FFFFFF",
    boxShadow: "none",
    padding: "0 1rem"
  },
  toolbarTitle: {
    flex: 1,
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
