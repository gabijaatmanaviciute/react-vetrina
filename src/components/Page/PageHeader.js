import PageHeaderNotification from "./PageHeaderNotification";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const PageHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography className={classes.toolbarTitle} variant="h5">Dashboard</Typography>
        <PageHeaderNotification className={classes.headerNotification} />
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.background.default,
    boxShadow: "none",
    padding: "0 1rem"
  },
  toolbarTitle: {
    flex: 1,
  },
  headerNotification: {
    color: "#103B66",
  },
}));
