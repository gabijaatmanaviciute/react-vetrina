import React, { Fragment } from "react";
import { ReactComponent as UsersIcon } from "assets/icons/users-icon.svg";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

function InviteFriend() {
  const classes = useStyles();
  return (
    <Fragment>
      <CardTitle title="Invite friend" icon={<UsersIcon />} />
      <Typography variant="h5" className={classes.cardContent}>
        <span className={classes.highlighted}>Receive 50 products</span> by
        inviting a friend who subscribes to a plan. Your friend will receive a
        30% discount coupon valid for any plan.
      </Typography>
      <CardLink
        linkText="Start inviting friends!"
        linkIcon={<ArrowForwardRoundedIcon />}
      />
    </Fragment>
  );
}

export default InviteFriend;

const useStyles = makeStyles((theme) => ({
  highlighted: {
    color: theme.palette.common.green,
    fontWeight: 700
  },
  cardContent: {
    margin: "1.5rem 0",
    fontWeight: 400
  },
}));
