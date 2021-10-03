import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { makeStyles } from "@material-ui/core/styles";
import DrawerHeader from "./DrawerHeader";

import {mainListItems} from "./../../data-layer/menu-data";
import {extraListItems} from "./../../data-layer/menu-data";
import {storeList} from "./../../data-layer/menu-data";

const drawerWidth = 255;

const SideDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <DrawerHeader />
      <List>
        {mainListItems.map( item => (
          <ListItem button key={item.name}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {extraListItems.map(item => (
          <ListItem button key={item.name}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    // height: "100vh",
    // display: "flex",
    // flexDirection: "column",
    background: "#0000FF",
  },
  drawerPaper: {
    width: drawerWidth,
  },
});
