import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Iphone12 from "assets/iPhone_12.svg";
import AppStore from "assets/app_store.svg";
import GooglePlay from "assets/google_play.svg";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";

function AppAd() {
  const classes = useStyles();
  return (
    <Grid container className={classes.panelContainer}>
      <Grid item container className={classes.adUpperSection}>
        <Grid item container className={classes.adAllText}>
          <Grid item className={classes.adText}>
            <Grid item>
              <Typography variant="h3">
                Sell your products on your exclusive APP published on the stores
              </Typography>
            </Grid>
            <Grid item className={classes.adLink}>
              <CardLink
                linkText="Show more"
                linkIcon={<ArrowForwardRoundedIcon />}
              />
            </Grid>
          </Grid>
          <Grid item>
            <img
              src={Iphone12}
              alt="Iphone12 picture"
              className={classes.iphone12}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.appStoreLinks}>
        <Grid>
          <img src={AppStore} alt="App Store" />
        </Grid>
        <Grid>
          <img src={GooglePlay} alt="Google Play" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AppAd;

const useStyles = makeStyles((theme) => ({
  adUpperSection: {
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.common.white,
  },
  adAllText: {
    // maxWidth: "55%",
  },
  adText: {},
  appStoreLinks: {
    display: "flex",
    justifyContent: "space-between",
  },
  iphone12: {
    width: "7.125rem",
    height: "14.25rem",
  },
}));
