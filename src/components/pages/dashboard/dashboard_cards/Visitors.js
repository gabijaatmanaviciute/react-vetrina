import { ReactComponent as EyeIcon } from "assets/icons/eye-icon.svg";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { CardContent, makeStyles } from "@material-ui/core";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import TimeIntervalDropdown from "components/reusable_components/panel_card_parts/TimeIntervalDropdown";

function Visitors() {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.cardContainer}>
      <Grid item className={classes.panelHeader}>
        <CardTitle title="Visitors" icon={<EyeIcon />} />
        <TimeIntervalDropdown />
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
  cardContainer: {
    minHeight: 190,
    justifyContent: "space-between",
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  panelContent: {
    display: "flex",
    alignItems: "center",
    fontSize: "2.625rem",
    lineHeight: "3.8125rem",
    fontWeight: 500,
    height: "4.8rem",
  },
}));
