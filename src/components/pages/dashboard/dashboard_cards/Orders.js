import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as ListIcon } from "assets/icons/list-icon.svg";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import TimeIntervalDropdown from "components/reusable_components/panel_card_parts/TimeIntervalDropdown";

function Orders() {
  const classes = useStyles();

  const orders = Math.floor(Math.random()*1000);
  return (
    <Grid container direction="column" className={classes.cardContainer}>
      <Grid item className={classes.panelHeader}>
        <CardTitle title="Orders" icon={<ListIcon />} />
        <TimeIntervalDropdown />
      </Grid>
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
      <Grid item className={classes.panelFooter}>
        <CardLink
          linkText="10 free tips to increase your sales"
          href="https://vetrinalive.com/categories/marketing/?_ga=2.90202650.1663349020.1633860055-33672331.1633860055"
        />
      </Grid>
    </Grid>
  );
}

export default Orders;

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
    margin: "1.5rem 0",
  },
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
