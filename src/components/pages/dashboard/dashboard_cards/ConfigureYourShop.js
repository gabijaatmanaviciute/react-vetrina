import { ReactComponent as ToolIcon } from "assets/icons/tool-icon.svg";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import PanelCard from "../../../reusable_components/panel_card_parts/PanelCard";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

function ConfigureYourShop() {
  const completeness = Math.floor(Math.random() * 100);
  const classes = useStyles(completeness);

  return (
    <PanelCard
      cardIcon={<ToolIcon />}
      cardTitle="Configure your shop"
      cardFooterElement={
        <CardLink
          linkText="Complete the setup!"
          linkIcon={<ArrowForwardRoundedIcon />}
          href="https://admin.vetrinalive.com/wizard"
        />
      }
    >
      <div className={classes.cardContent}>
        <Typography variant="h1" className={classes.number}>
          {`${completeness}%`}
        </Typography>
        <Typography variant="h6" className={classes.label}>
          Completed
        </Typography>
      </div>
      <Typography variant="h5" className={classes.undertext}>
        Complete all the steps to have a complete shop to best present to your
        customers.
      </Typography>
    </PanelCard>
  );
}

export default ConfigureYourShop;

const useStyles = makeStyles((theme) => ({
  cardContent: {
    color: (completeness) => {
      return completeness < 31
        ? theme.palette.common.red
        : completeness < 71
        ? theme.palette.common.orange
        : theme.palette.common.green;
    },
    marginBottom: "1.5rem",
  },
  number: {
    fontFamily: "Source Sans Pro",
    fontWeight: 600,
  },
  undertext: {
    fontWeight: 400,
  },
}));
