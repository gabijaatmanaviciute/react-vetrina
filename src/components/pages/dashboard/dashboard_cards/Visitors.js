import { ReactComponent as EyeIcon } from "assets/icons/eye-icon.svg";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import PanelCard from "components/reusable_components/panel_card_parts/PanelCard";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import TimeIntervalDropdown from "components/reusable_components/panel_card_parts/TimeIntervalDropdown";

function Visitors({ popUpOpenHandler }) {
  const classes = useStyles();

  const visitors = Math.floor(Math.random() * 3000);

  return (
    <PanelCard
      cardTitle="Visitors"
      cardIcon={<EyeIcon />}
      cardHeaderSideElement={<TimeIntervalDropdown />}
      cardFooterElement={
        <CardLink
          linkText="Do you want more visits? Contact us!"
          linkIcon={<ArrowForwardRoundedIcon />}
          onClick={popUpOpenHandler}
        />
      }
    >
      <Typography className={classes.panelContent}>{visitors}</Typography>
    </PanelCard>
  );
}

export default Visitors;

const useStyles = makeStyles((theme) => ({
  panelContent: {
    display: "flex",
    alignItems: "center",
    fontSize: "2.625rem",
    lineHeight: "3.8125rem",
    fontWeight: 500,
    height: "4.8rem",
  },
}));
