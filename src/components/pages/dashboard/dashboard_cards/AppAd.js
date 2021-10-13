import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Iphone12 from "assets/iPhone_12.svg";
import AppStore from "assets/app_store.svg";
import GooglePlay from "assets/google_play.svg";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";

function AppAd() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.panelContainer}>
      <Grid item className={classes.adUpperSection}>
        <Box className={classes.adAllText}>
          <Typography variant="h3" component="p" className={classes.adText}>
            Sell your products on your exclusive APP published on the stores
          </Typography>
          <CardLink
            className={classes.adLink}
            linkText="Show more"
            linkIcon={<ArrowForwardRoundedIcon />}
            linkColor="#fff"
            href="https://play.google.com/store/apps/details?id=it.lastingdynamics.vetrinaliveadmin&gl=DE"
          />
        </Box>
        <img src={Iphone12} alt="Iphone12" className={classes.iphone12} />
      </Grid>
      <Grid item container className={classes.appStoreLinks}>
        <Grid item>
          <img src={AppStore} alt="App Store" />
        </Grid>
        <Grid item>
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
    marginBottom: "1.75rem",
  },
  adAllText: {
    padding: "0.625rem 1.4375rem 0 0"
  },
  adText: {
    display: "inline-block",
    fontWeight: 400,
    marginBottom: "0.8125rem",
  },
  appStoreLinks: {
    display: "flex",
    justifyContent: "space-around",
  },
  iphone12: {
    display: "inline-block",
    width: "7.125rem",
    height: "14.25rem",
  },
}));
