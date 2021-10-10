import React from "react";
import { ReactComponent as NewAppIcon } from "assets/icons/new-app-icon.svg";
import CardContent from "components/reusable_components/panel_card_parts/CardContent";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import Globe from "assets/globe_medium.svg";

function ExtensionsMarketplace() {
  const classes = useStyles();
  return (
    <div>
      <CardTitle title="Extensions Marketplace" icon={<NewAppIcon />} />
      <CardContent>
        <Grid container direction="row" className={classes.carousel}>
          <Grid item>
            <Box className={classes.box1}>
              <img alt="Globe" src={Globe} />
            </Box>
            <Typography>Connect your own domain </Typography>
          </Grid>
          <Grid item>
            <Box className={classes.box2}>
              <Typography className={classes.boxUpperText}>+50 Prodotti</Typography>
            </Box>
            <Typography>50 Additional Products </Typography>
          </Grid>
          <Grid item>
            <Box className={classes.box3}></Box>
            <Typography>100 Prodotti aggiuntivi</Typography>
            <Typography>€ 175,00 / per sempre</Typography>
          </Grid>
          <Grid item>
            <Box className={classes.box4}></Box>
            <Typography>500 Prodotti aggiuntivi</Typography>
            <Typography>€ 75,00 / per sempre</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardLink
        linkText="Discover all extensions"
        linkIcon={<ArrowForwardRoundedIcon />}
      />
    </div>
  );
}

export default ExtensionsMarketplace;

const useStyles = makeStyles((theme) => ({
  carousel: {
    overflow: "hidden",
  },
  box1: {
    background: theme.palette.common.orange,
    borderRadius: "10px",
    width: "9.5rem",
    height: "9.375rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "3.125rem",
    marginBottom: "0.75rem",
  },
  box2: {
    background: theme.palette.common.green,
    color: theme.palette.common.white,
    borderRadius: "10px",
    width: "9.5rem",
    height: "9.375rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "3.125rem",
    marginBottom: "0.75rem",
    
  }
}));
