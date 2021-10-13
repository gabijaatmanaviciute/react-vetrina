import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function NewsItem({ image, title, textPrimary, textSecondary, link }) {
  const classes = useStyles();

  return (
    <Box className={classes.newsItemBox}>
      <Box className={classes.newsImage}></Box>
      <Box className={classes.newsTextSection}>
        <Typography className={classes.newsTitle}>{title}</Typography>
        <Typography className={classes.newsPrimaryText}>
          {textPrimary}
        </Typography>
        <Typography className={classes.newsSecondaryText} component="a">
          {textSecondary}
        </Typography>
      </Box>
    </Box>
  );
}

export default NewsItem;

const useStyles = makeStyles((theme) => ({
  newsItemBox: {
    display: "flex",
    marginTop: "2rem",
    width: "50%",
  },
  newsImage: {
    minWidth: "6.25rem",
    height: "6.25rem",
    background: theme.palette.common.green,
    marginRight: "1rem",
  },
  newsTextSection: {
    marginRight: "1.125rem",
    fontFamily: "Noto Sans HK",
  },
  newsTitle: {
    fontWeight: 500,
    fontSize: "0.6875rem",
    lineHeight: "0.9375rem",
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    margin: "0.625rem 0 0.5rem",
  },
  newsPrimaryText: {
    fontWeight: 500,
    fontSize: "0.9375rem",
    lineHeight: "1.25rem",
  },
  newsSecondaryText: {
      fontWeight: 300,
      fontSize: "0.75rem",
      lineHeight: "0.75rem",
      textDecoration: "underline",
      margin: "0.5625rem 0 0.5rem",
  }
}));
