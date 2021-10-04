import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import DrawerHeader from "./DrawerHeader";
import { Link } from "react-router-dom";

import { mainListItems } from "./../../data-layer/menu-data";
import { extraListItems } from "./../../data-layer/menu-data";
import { storeList } from "./../../data-layer/menu-data";
import { ReactComponent as HomeIcon } from "assets/icons/home-icon.svg";

const drawerWidth = 255;

const SideDrawer = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [selectedItem, setSelectedItem] = useState("dashboard");
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
            <ListItem
              disableGutters
              button
              onClick={() => setSelectedItem(item.destination)}
              component={Link}
              to={`/${item.destination}`}
              key={item.name}
              className={`classes.menuListItem ${
                selectedItem === item.destination ? "selected" : ""
              }`}
            >
              <div className={classes.selectedItemBar} />
              
              <ListItemIcon className={classes.listItemIcon}>
                <img src={require(`assets/icons/${item.icon_title}`).default} />
                {/* <HomeIcon className={classes.homeIcon} /> */}
              </ListItemIcon>
              <ListItemText disableTypography className={classes.listItemText}>
                {item.name}
              </ListItemText>
              
            </ListItem>
          ))}
        </List>
      
      <Divider/>
      <List className={classes.menuList}>
          {extraListItems.map((item) => (
            <ListItem
              disableGutters
              button
              onClick={() => setSelectedItem(item.destination)}
              component={Link}
              to={`/${item.destination}`}
              key={item.name}
              className={`classes.menuListItem ${
                selectedItem === item.destination ? "selected" : ""
              }`}
            >
              <div className={classes.selectedItemBar} />
              
              <ListItemIcon className={classes.listItemIcon}>
                <img src={require(`assets/icons/${item.icon_title}`).default} />
              </ListItemIcon>
              <ListItemText disableTypography className={classes.listItemText}>
                {item.name}
              </ListItemText>
              
            </ListItem>
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
  selectedItemBar: {
    display: "inline-block",
    width: "4px",
    height: "2rem",
    marginRight: "3px",
    borderRadius: "4px",
  },
  menuListItem: {
    padding: "0.375rem 1rem 0.375rem 0.8125rem",
    height: "2rem",
    borderRadius: "4px",
    "&:hover, &:active": {},
  },
  listItemIcon: {
    marginLeft: "0.8125rem",
    marginRight: "0.8125rem",
    minWidth: "1.25rem",
    color: theme.palette.common.red
  },
  listItemText: {
    padding: 0,
    margin: 0,
    color: theme.palette.common.black,
    fontFamily: "Noto Sans HK",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1rem",
  },
}));
