import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactComponent as MainLogo } from "./../../assets/logo/main-logo.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core";

function DrawerHeader() {
  const classes = useStyles();

  return (
    <div className={classes.drawerHeader}>
      <MainLogo />
      <IconButton className={classes.menuButton}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export default DrawerHeader;

const useStyles = makeStyles({
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 1.25rem",
  },
  menuButton: {
      padding: 0,
  },
});
