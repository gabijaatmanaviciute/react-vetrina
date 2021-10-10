import React from "react";
import SideDrawer from "components/layout/side_drawer/SideDrawer";
import PageHeader from "components/layout/page_header/PageHeader";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <SideDrawer />
      <Grid item container direction="column">
        <Grid item>
          <PageHeader />
        </Grid>
        <Divider className={classes.headerDivider} />
        <Grid item container className={classes.pageContent}>
          {children}
        </Grid>
      </Grid>
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
  pageContent: {
    background: theme.palette.background.hoverGrey,
  },
}));
