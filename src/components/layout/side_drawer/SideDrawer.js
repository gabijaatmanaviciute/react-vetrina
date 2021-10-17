import Drawer from "@material-ui/core/Drawer";
import DrawerHeader from "./DrawerHeader";
import ShopSelectDropdown from "./ShopSelectDropdown";
import List from "@material-ui/core/List";
import MenuListItem from "./MenuListItem";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { mainListItems } from "utils/menu-data";
import { extraListItems } from "utils/menu-data";
import { openedDrawerWidth } from "utils/global-constants";
import { closedDrawerWidth } from "utils/global-constants";
import clsx from "clsx";

const SideDrawer = ({
  currentPageTitleHandler,
  menuIconClickHandler,
  drawerOpen,
}) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        }),
      }}
    >
      <DrawerHeader
        changeMenuVisibility={menuIconClickHandler}
        isOpen={drawerOpen}
      />
      <List className={classes.menuList}>
        {mainListItems.map((item) => (
          <MenuListItem
            item={item}
            key={item.name}
            drawerOpen={drawerOpen}
            currentPageTitleHandler={currentPageTitleHandler}
          />
        ))}
      </List>
      <Divider className={classes.drawerDivider} />
      <List className={clsx(classes.menuList, classes.extraList)}>
        {extraListItems.map((item) => (
          <MenuListItem
            item={item}
            key={item.name}
            drawerOpen={drawerOpen}
            currentPageTitleHandler={currentPageTitleHandler}
          />
        ))}
      </List>
      {drawerOpen && <ShopSelectDropdown />}
    </Drawer>
  );
};

export default SideDrawer;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: openedDrawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: openedDrawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: closedDrawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 2,
    },
  },
  menuList: {
    padding: 0,
    margin: "0.1875rem 0 1rem",
    maxWidth: openedDrawerWidth,
  },
  extraList: {
    marginTop: "1.375rem",
    marginBottom: 0,
  },
  drawerDivider: {
    backgroundColor: "#E5E5E5",
  },
}));
