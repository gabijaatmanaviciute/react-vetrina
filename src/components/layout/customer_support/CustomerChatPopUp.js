import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import clsx from "clsx";

function CustomerChatPopUp({ popUpCloseHandler }) {
  const classes = useStyles();
  return (
    <div className={classes.chatPopUp}>
      <div className={classes.customerSupportGreeting}>
        Hi there, do you need help? 👋
      </div>
      <div className={classes.chatPopUpButtons}>
        <IconButton onClick={popUpCloseHandler}>
          <CloseRoundedIcon
            className={clsx(classes.iconButton, classes.closeButton)}
          />
        </IconButton>
        <IconButton>
          <CommentIcon
            className={clsx(classes.iconButton, classes.chatButton)}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default CustomerChatPopUp;

const useStyles = makeStyles((theme) => ({
  chatPopUp: {
    position: "fixed",
    right: "2rem",
    bottom: "2rem",
  },
  customerSupportGreeting: {
    background: theme.palette.primary.main,
    padding: "1rem 1.5rem",
    borderRadius: 40,
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: "1.2rem",
  },
  chatPopUpButtons: {
    float: "right",
  },
  iconButton: {
    color: theme.palette.common.white,
    borderRadius: "50%",
    width: "2rem",
    height: "2rem",
    boxSizing: "content-box",
    padding: "1rem",
  },
  closeButton: {
    background: theme.palette.common.red,
  },
  chatButton: {
    background: theme.palette.primary.main,
  },
}));
