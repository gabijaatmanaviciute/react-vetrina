import React from "react";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import { ReactComponent as HeadphonesIcon } from "assets/icons/headphones-icon.svg";
import CardContent from "components/reusable_components/panel_card_parts/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from  "components/reusable_components/panel_card_parts/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import AvatarPicture from "assets/customer_support.png";

function CustomerSupport({popUpOpenHandler}) {
  const classes = useStyles();
  return (
    <div>
      <CardTitle title="Customer support" icon={<HeadphonesIcon />} />
      <div className={classes.supportContent}>
        <Avatar className={classes.avatar} src={AvatarPicture}/>
        <CardContent>
          <Typography variant="bodySmall">
            Marina is here to help you.
          </Typography>
        </CardContent>
      </div>
      <Button text="Contact us" onClick={popUpOpenHandler} />
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
