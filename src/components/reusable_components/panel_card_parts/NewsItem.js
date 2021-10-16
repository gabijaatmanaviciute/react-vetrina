import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function NewsItem({ image, title, textPrimary, textSecondary, link }) {
  const classes = useStyles();

  return (
    <Box className={classes.newsItemBox}>
      {/* <Box className={classes.newsImage}></Box> */}
      <Box className={classes.newsImageBox}>
        <img src={image} className={classes.newsImage} alt="News Article" />
      </Box>
      <Box className={classes.newsTextSection}>
        <Typography className={classes.newsTitle}>{title}</Typography>
        <Link href={link} target="_blank">
          <Typography className={classes.newsPrimaryText}>
            {textPrimary}
          </Typography>
        </Link>
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
  newsImageBox: {
    minWidth: "6.25rem",
    maxWidth: "6.25rem",
    height: "6.25rem",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    marginRight: "1rem",

  },
  newsImage: {
    background: theme.palette.common.green,
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
    color: theme.palette.text.primary,
  },
  newsSecondaryText: {
    fontWeight: 300,
    fontSize: "0.75rem",
    lineHeight: "0.75rem",
    textDecoration: "underline",
    margin: "0.5625rem 0 0.5rem",
  },
}));
