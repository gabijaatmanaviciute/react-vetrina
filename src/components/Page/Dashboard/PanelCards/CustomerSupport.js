import React from "react";
import CardTitle from "../PanelCardParts/CardTitle";
import { ReactComponent as HeadphonesIcon } from "assets/icons/headphones-icon.svg";
import CardContent from "../PanelCardParts/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "../PanelCardParts/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import AvatarPicture from "assets/customer_support.jpg";

function CustomerSupport() {
  const classes = useStyles();
  return (
    <div>
      <CardTitle title="Customer support" icon={<HeadphonesIcon />} />
      <div className={classes.supportContent}>
        <Avatar className={classes.avatar} src={AvatarPicture}/>
        <CardContent>
          <Typography variant="bodySmall">
            Simone is here to help you.
          </Typography>
        </CardContent>
      </div>
      <Button text="Contact us" />
    </div>
  );
}

export default CustomerSupport;

const useStyles = makeStyles({
    supportContent: {
        display: "flex",
        alignItems: "center"
    },
    avatar: {
        marginRight: "1.375rem",
        width: "2.5rem",
        height: "2.5rem"
    }
});
