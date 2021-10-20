import { useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton, makeStyles, Typography, Divider } from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { notifDrawerWidth } from "utils/global-constants";
import NotificationCard from "../reusable_components/other/NotificationCard";
import { useHttp } from "hooks/use-http";
import { getNewsArticles } from "../../http-requests/http-request-functions";
import Spinner from "components/reusable_components/other/Spinner";

function NotificationsDrawer({ notifDrawerOpen, notifDrawerCloseHandler }) {
  const classes = useStyles();

  const {
    isLoading,
    error,
    sendRequest,
    data: articles,
  } = useHttp(getNewsArticles);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
      <Box className={classes.notifCardContainer}>
        {isLoading && <Spinner />}
        {error && <div>Could not load resources.</div>}
        {articles &&
          articles.map((item) => {
            const { url, urlToImage, title, description, publishedAt } = item;
            return (
              <NotificationCard
                key={url}
                date={publishedAt}
                image={urlToImage}
                title={title}
                description={description}
                link={url}
              />
            );
          })}
      </Box>
      {/* <List className={classes.notifItemList}>
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
      </List> */}
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
    fontSize: "1rem",
  },
  notifCardContainer: {
    background: theme.palette.background.secondaryList,
    padding: "1rem",
  },
}));
