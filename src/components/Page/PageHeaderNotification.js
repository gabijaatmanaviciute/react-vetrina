import React from "react";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core";
import { ReactComponent as ZapIcon } from "./../../assets/icons/zap-icon.svg";

const HeaderNotification = () => {
  const classes = useSyles();

  return (
    <Typography className={classes.HeaderNotification}>
      <Badge badgeContent={2} color="secondary">
      <SvgIcon>
        <ZapIcon />
      </SvgIcon>
        <Typography>What's new</Typography>
      </Badge>
    </Typography>
  );
};

export default HeaderNotification;

const useSyles = makeStyles({
  HeaderNotification: {
    color: "#103B66",
  },
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
});
