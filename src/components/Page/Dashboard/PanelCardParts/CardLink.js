import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function CardLink({ linkText, linkIcon }) {
  const classes = useStyles();
  return (
    <div className={classes.cardLink}>
      <div className={classes.linkText}>
        <Typography>{linkText}</Typography>
      </div>
      {linkIcon && (
        <div className={`${classes.linkIcon} ${classes.iconType}`}>
          {linkIcon}
        </div>
      )}
    </div>
  );
}

export default CardLink;

const useStyles = makeStyles((theme) => ({
  cardLink: {
    "&:hover": {
      cursor: "pointer"
    },
    display: "flex",
    "& .white": {
      color: theme.palette.common.white
    },
    "& .green": {
      color: theme.palette.common.green
    }
  },
  linkText: {
    "& .MuiTypography-body1": {
      ...theme.typography.panelLinks,
    },
  },
  linkIcon: {
    "& .MuiSvgIcon-root": {
      color: theme.typography.panelLinks.color,
      width: "1.25rem",
      height: "1.25rem",
      marginLeft: "0.75rem",
    },
  },
}));
