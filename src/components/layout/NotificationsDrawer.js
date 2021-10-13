import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton, makeStyles, Typography, Divider } from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { notifDrawerWidth } from "utils/global-constants";

function NotificationsDrawer({ notifDrawerOpen, notifDrawerCloseHandler }) {
  const classes = useStyles();
  return (
    <Drawer
      anchor="right"
      onClose={notifDrawerCloseHandler}
      open={notifDrawerOpen}
      className={classes.notifDrawer}
      classes={{ paper: classes.notifDrawer }}
    >
      <div className={classes.notifDrawerHeader}>
        <Typography variant="h5">What's new</Typography>
        <IconButton onClick={notifDrawerCloseHandler}>
          <CloseRoundedIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.notifItemList}>
        <ListItem button>
          <ListItemText variant="h6" className={classes.notifListItemText}>
            Notification 1
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.notifListItemText}>
            Notification 2
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default NotificationsDrawer;

const useStyles = makeStyles((theme) => ({
  notifDrawer: {
    width: notifDrawerWidth,
  },
  notifDrawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 1.3rem",
    margin: 0,
    fontSize: "1rem"
  },
  notifItemList: {
    background: theme.palette.background.secondaryList,
    padding: 0,
  },
  notifListItemText: {
    fontSize: "1rem",
  },
}));
