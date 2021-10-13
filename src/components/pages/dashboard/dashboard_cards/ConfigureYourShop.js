import React, { Fragment } from "react";
import { ReactComponent as ToolIcon } from "assets/icons/tool-icon.svg";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import CardContent from "components/reusable_components/panel_card_parts/CardContent";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

function ConfigureYourShop() {
  const completeness = Math.floor(Math.random() * 100);
  const classes = useStyles(completeness);

  return (
    <Fragment>
      <CardTitle title="Configure your shop" icon={<ToolIcon />} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h1" className={classes.number}>
          {`${completeness}%`}
        </Typography>
        <Typography variant="h6" className={classes.label}>
          Completed
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h5" className={classes.undertext}>
          Complete all the steps to have a complete shop to best present to your
          customers.
        </Typography>
      </CardContent>
      <CardLink
        linkText="Complete the setup!"
        linkIcon={<ArrowForwardRoundedIcon />}
        href="https://admin.vetrinalive.com/wizard"
      />
    </Fragment>
  );
}

export default ConfigureYourShop;

const useStyles = makeStyles((theme) => ({
  cardContent: {
    color: (completeness) => {
      return completeness < 31
        ? theme.palette.common.red
        : completeness < 81
        ? theme.palette.common.orange
        : theme.palette.common.green;
    },
  },
  number: {
    fontFamily: "Source Sans Pro",
    fontWeight: 600,
  },
  undertext: {
    fontWeight: 400,
  },
}));
