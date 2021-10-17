import React from "react";
import Grid from "@material-ui/core/Grid";
import PanelCard from "../../../reusable_components/panel_card_parts/PanelCard";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as ListIcon } from "assets/icons/list-icon.svg";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import TimeIntervalDropdown from "components/reusable_components/panel_card_parts/TimeIntervalDropdown";

function Orders() {
  const classes = useStyles();

  const orders = Math.floor(Math.random() * 1000);
  return (
    <PanelCard
      cardIcon={<ListIcon />}
      cardTitle="Orders"
      cardHeaderSideElement={<TimeIntervalDropdown />}
      cardFooterElement={
        <CardLink
          linkText="10 free tips to increase your sales"
          href="https://vetrinalive.com/categories/marketing/?_ga=2.90202650.1663349020.1633860055-33672331.1633860055"
        />
      }
    >
      <Grid item className={classes.panelContent}>
        <Grid item className={classes.orderRow}>
          <Typography variant="h5" className={classes.statLabel}>
            Orders received:
          </Typography>
          <Typography variant="h5">{orders}</Typography>
        </Grid>
        <Grid item className={classes.orderRow}>
          <Typography variant="h5" className={classes.statLabel}>
            Earnings:
          </Typography>
          <Typography variant="h5">€ 1893,24</Typography>
        </Grid>
      </Grid>
    </PanelCard>
  );
}

export default Orders;

const useStyles = makeStyles((theme) => ({  
  orderRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.75rem",
  },
  statLabel: {
    fontWeight: 400,
    color: "#6C7C8C",
  },
}));
