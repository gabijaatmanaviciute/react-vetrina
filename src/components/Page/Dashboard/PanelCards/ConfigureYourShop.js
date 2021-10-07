import React, { Fragment } from "react";
import { ReactComponent as ToolIcon } from "assets/icons/tool-icon.svg";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import CardTitle from "../PanelCardParts/CardTitle";
import CardLink from "../PanelCardParts/CardLink";
import CardContent from "../PanelCardParts/CardContent";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

function ConfigureYourShop() {
  const classes = useStyles();
  return (
    <Fragment>
      <CardTitle title="Configure your shop" icon={<ToolIcon />} />
      <CardContent>
        <Typography variant="h1" className={classes.number}>
          45%
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
      />
    </Fragment>
  );
}

export default ConfigureYourShop;

const useStyles = makeStyles((theme) => ({
  number: {
    color: theme.palette.common.orange,
    fontFamily: "Source Sans Pro",
    fontWeight: 600
  },
  label: {
    color: theme.palette.common.orange,
  },
  undertext: {
    fontWeight: 400
  }
}));
