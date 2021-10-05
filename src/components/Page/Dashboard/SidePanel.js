import { Fragment } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { ReactComponent as ToolIcon } from "assets/icons/tool-icon.svg";
import { ReactComponent as UsersIcon } from "assets/icons/users-icon.svg";
import { ReactComponent as HeadphonesIcon } from "assets/icons/headphones-icon.svg";
import TrustPilotLogo from "assets/logo/trustpilot-logo.svg";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const SidePanel = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item className={classes.gridItem}>
        <Card className={classes.panelCard}>
          <ToolIcon className={classes.panelIcon} />
          <p>Side panel</p>
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.panelCard} id="trustpilot">
          <img src={TrustPilotLogo} alt="Trustpilot logo" />
          <p>Trustpilot</p>
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.panelCard}>
          <UsersIcon className={classes.panelIcon} />
          <p>Invite friend</p>
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.panelCard}>
          <HeadphonesIcon className={classes.panelIcon} />
          <p>Customer support</p>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default SidePanel;

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: "0.75rem",
    "& #trustpilot": {
        background: "#000032",

    }
  },
  panelCard: {
    ...theme.panelCard,
  },
  panelIcon: {
    width: "1.25rem",
    height: "1.25rem",
  },
}));
