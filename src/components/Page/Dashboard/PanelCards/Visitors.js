import React from "react";
import { ReactComponent as EyeIcon } from "assets/icons/eye-icon.svg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { CardContent, makeStyles } from "@material-ui/core";
import CardTitle from "../PanelCardParts/CardTitle";
import CardLink from "../PanelCardParts/CardLink";

function Visitors() {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item className={classes.panelHeader}>
        <CardTitle title="Visitors" icon={<EyeIcon />} />
        <div className={classes.dropdown}>
          <Typography variant="input">This month</Typography>
          <KeyboardArrowDownIcon />
        </div>
      </Grid>
      <Grid item>
        <CardContent>
          <Typography className={classes.panelContent}>1824</Typography>
        </CardContent>
      </Grid>
      <Grid item className={classes.panelFooter}>
        <CardLink
          linkText="Do you want more visits? Contact us!"
          linkIcon={<ArrowForwardRoundedIcon />}
        />
      </Grid>
    </Grid>
  );
}

export default Visitors;

const useStyles = makeStyles((theme) => ({
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  panelContent: {
    fontSize: "2.625rem",
    lineHeight: "3.8125rem",
    fontWeight: 500,
  },
}));
