import { useState } from "react";
import SideDrawer from "components/layout/side_drawer/SideDrawer";
import PageHeader from "components/layout/page_header/PageHeader";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NotificationsDrawer from "./NotificationsDrawer";

function Layout({ children }) {
  const [currentPageTitle, setCurrentPageTitle] = useState("Dashboard");
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [notifDrawerOpen, setNotifDrawerOpen] = useState(false);
  const classes = useStyles();

  const menuIconClickHandler = () => {
    setDrawerOpen(() => !drawerOpen);
  };
  const notifDrawerOpenHandler = () => {
    setNotifDrawerOpen(true);
  };
  const notifDrawerCloseHandler = () => {
    setNotifDrawerOpen(false);
  };
  const currentPageTitleHandler = (title) => {
    setCurrentPageTitle(title);
  };

  return (
    <div className={classes.layout}>
      <SideDrawer
        currentPageTitleHandler={currentPageTitleHandler}
        menuIconClickHandler={menuIconClickHandler}
        drawerOpen={drawerOpen}
      />
      <Grid item container direction="column">
        <div className={classes.contentOffset} />
        <Grid item>
          <PageHeader
            currentPageTitle={currentPageTitle}
            drawerOpen={drawerOpen}
            notifDrawerOpenHandler={notifDrawerOpenHandler}
          />
        </Grid>
        <Divider className={classes.headerDivider} />
        <Grid item container className={classes.pageContent}>
          {children}
        </Grid>
      </Grid>
      <NotificationsDrawer
        notifDrawerOpen={notifDrawerOpen}
        notifDrawerCloseHandler={notifDrawerCloseHandler}
      />
    </div>
  );
}

export default Layout;

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
  },
  headerDivider: {
    background: "rgba(0, 0, 0, 0.24)",
  },
  contentOffset: theme.mixins.toolbar,
  pageContent: {
    background: theme.palette.background.hoverGrey,
  },
}));
