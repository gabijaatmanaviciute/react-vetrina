import { Fragment } from "react";
import PageHeaderNotification from "./PageHeaderNotification";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { openedDrawerWidth } from "utils/global-constants";
import { closedDrawerWidth } from "utils/global-constants";
import clsx from "clsx";

const PageHeader = ({
  currentPageTitle,
  drawerOpen,
  notifDrawerOpenHandler,
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar
        className={clsx(classes.header, {
          [classes.drawerOpened]: drawerOpen,
          [classes.drawerClosed]: !drawerOpen,
        })}
      >
        <Toolbar disableGutters className={classes.toolbar}>
          <Typography className={classes.toolbarTitle} variant="h5">
            {currentPageTitle}
          </Typography>
          <PageHeaderNotification
            className={classes.headerNotification}
            notifDrawerOpenHandler={notifDrawerOpenHandler}
          />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default PageHeader;

const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: "3.75rem",
    background: theme.palette.background.default,
    boxShadow: "none",
    padding: "0 2.3125rem",
    color: theme.palette.text.primary,
    height: "3.6875rem",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  headerDivider: {
    background: "rgba(0, 0, 0, 0.24)",
  },
  drawerClosed: {
    width: `calc(100% - ${closedDrawerWidth}px)`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerOpened: {
    width: `calc(100% - ${openedDrawerWidth}px)`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {},
  toolbarTitle: {
    flex: 1,
  },
}));
