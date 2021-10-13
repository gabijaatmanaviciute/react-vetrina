import React from "react";
import TrustPilotLogo from "assets/logo/trustpilot-logo.svg";
import CardContent from "components/reusable_components/panel_card_parts/CardContent";
import { makeStyles, useTheme, Typography } from "@material-ui/core";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

function Trustpilot() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <img src={TrustPilotLogo} alt="Trustpilot logo" />
      <CardContent className={classes.pilotText}>
        <Typography variant="h5">
          Show us your love by leaving a{" "}
          <span className={classes.emph1}>positive</span> review on trust pilot
          and receive the extension of{" "}
          <span className={classes.emph2}>50 additional products</span>
        </Typography>
      </CardContent>
      <CardLink
        linkText="Write a review on Trustpilot"
        linkIcon={<ArrowForwardRoundedIcon />}
        linkColor={theme.palette.common.green}
        href="https://www.trustpilot.com/evaluate/vetrinalive.it"
      />
    </div>
  );
}

export default Trustpilot;

const useStyles = makeStyles((theme) => ({
  pilotText: {
    "& .MuiTypography-h5": {
      color: theme.palette.common.white,
      fontWeight: 400,
    },
  },
  emph1: {
    color: theme.palette.common.green,
  },
  emph2: {
    fontWeight: 700,
  },
}));
