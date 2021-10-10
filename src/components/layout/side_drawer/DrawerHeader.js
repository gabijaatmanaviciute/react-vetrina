import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {ReactComponent as MenuIcon} from "assets/icons/menu-icon.svg";
import mainLogo from "assets/logo/main-logo.svg";
import { makeStyles } from "@material-ui/core";

function DrawerHeader({changeMenuVisibility}) {
  const classes = useStyles();

  return (
    <div className={classes.drawerHeader}>
      <img className={classes.mainLogo} alt="Site logo" src={mainLogo} />
      <IconButton className={classes.menuButton} onClick={changeMenuVisibility}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export default DrawerHeader;

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 1.5rem 1.5rem 1.25rem",
    position: "sticky",
    top: 0,
    background: theme.palette.background.default,
    zIndex: 10,
  },
  mainLogo: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuButton: {
    height: "1.5rem",
    width: "1.5rem",
    padding: 0,
    "&:hover": {
      background: "transparent",
    }
  },
}));
