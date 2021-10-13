import React from "react";
import { ReactComponent as FileTextIcon } from "assets/icons/file-text-icon.svg";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import NewsItem from "components/reusable_components/panel_card_parts/NewsItem";
import { ReactComponent as ExternalLinkIcon } from "assets/icons/external-link-icon-blue.svg";

function LatestNews() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item container className={classes.newsCardHeader}>
        <Grid item>
          <CardTitle title="Latest news" icon={<FileTextIcon />} />
        </Grid>
        <Grid item>
          <CardLink
            linkText="Visit our blog"
            linkIcon={<ExternalLinkIcon />}
            href="https://vetrinalive.com/blog?_ga=2.89335323.1663349020.1633860055-33672331.1633860055"
          />
        </Grid>
      </Grid>
      <Grid item container className={classes.newsContainer}>
        <NewsItem
          image=""
          title="E-commerce"
          textPrimary="How to earn money online: 7 ideas for you"
          textSecondary="Estimated reading: 4mins"
          link="/"
        />
        <NewsItem
          image=""
          title="E-commerce"
          textPrimary="How to earn money online: 7 ideas for you"
          textSecondary="Estimated reading: 4mins"
          link="/"
        />
        <NewsItem
          image=""
          title="E-commerce"
          textPrimary="How to earn money online: 7 ideas for you"
          textSecondary="Estimated reading: 4mins"
          link="/"
        />
        <NewsItem
          image=""
          title="E-commerce"
          textPrimary="How to earn money online: 7 ideas for you"
          textSecondary="Estimated reading: 4mins"
          link="/"
        />
        <NewsItem
          image=""
          title="E-commerce"
          textPrimary="How to earn money online: 7 ideas for you"
          textSecondary="Estimated reading: 4mins"
          link="/"
        />
        <NewsItem
          image=""
          title="E-commerce"
          textPrimary="How to earn money online: 7 ideas for you"
          textSecondary="Estimated reading: 4mins"
          link="/"
        />
      </Grid>
    </Grid>
  );
}

export default LatestNews;

const useStyles = makeStyles((theme) => ({
  newsContainer: {
    display: "flex",
    marginTop: "0.875rem",
  },
  newsCardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
