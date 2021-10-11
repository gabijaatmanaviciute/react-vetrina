import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import MenuListItem from "./MenuListItem";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import DrawerHeader from "./DrawerHeader";

import { mainListItems } from "utils/menu-data";
import { extraListItems } from "utils/menu-data";
import { storeList } from "utils/menu-data";
import clsx from 'clsx';

const drawerWidth = 256;

const SideDrawer = () => {
  const [showMenu, setShowMenu] = useState(true);
  const classes = useStyles();

  const menuIconClickHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <DrawerHeader changeMenuVisibility={menuIconClickHandler} />
      <List className={classes.menuList}>
        {mainListItems.map((item) => (
          <MenuListItem item={item} />
        ))}
      </List>
      <Divider />
      <List className={clsx(classes.menuList, classes.extraList)}>
        {extraListItems.map((item) => (
          <MenuListItem item={item} />
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuList: {
    padding: 0,
    margin: "0.1875rem 0 1rem",
    maxWidth: drawerWidth,
  },
  extraList: {
    marginTop: "1.375rem"
  },
}));
