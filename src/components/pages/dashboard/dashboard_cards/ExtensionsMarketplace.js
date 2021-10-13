import React from "react";
import { ReactComponent as NewAppIcon } from "assets/icons/new-app-icon.svg";
import CardContent from "components/reusable_components/panel_card_parts/CardContent";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import Globe from "assets/globe_medium.svg";
import clsx from "clsx";

function ExtensionsMarketplace() {
  const classes = useStyles();
  return (
    <div>
      <CardTitle title="Extensions Marketplace" icon={<NewAppIcon />} />
      <CardContent>
        <Box className={classes.carousel}>
          <Box className={clsx(classes.carouselBox, classes.box1)}>
            <Box className={clsx(classes.image1, classes.carouselImage)}>
              <img alt="Globe" src={Globe} />
            </Box>
            <Typography className={classes.carouselItemText}>
              Connect your own domain
            </Typography>
          </Box>
          <Box className={clsx(classes.carouselBox, classes.box2)}>
            <Box className={clsx(classes.image2, classes.carouselImage)}>
              <Typography className={classes.boxUpperText}>
                +50 Products
              </Typography>
            </Box>
            <Typography className={classes.carouselItemText}>
              50 Additional Products
            </Typography>
          </Box>
          <Box className={clsx(classes.carouselBox, classes.box3)}>
            <Box className={clsx(classes.image3, classes.carouselImage)}>
              <Typography className={classes.carouselItemText}>+10 Products</Typography>
            </Box>
            <Typography className={classes.carouselItemText}>
              10 Additional Products
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardLink
        linkText="Discover all extensions"
        linkIcon={<ArrowForwardRoundedIcon />}
        href="https://admin.vetrinalive.com/extensions"
      />
    </div>
  );
}

export default ExtensionsMarketplace;

const useStyles = makeStyles((theme) => ({
  carousel: {
    display: "flex",
    overflow: "hidden",
  },
  carouselBox: {
    marginRight: "3.125rem",
  },
  carouselImage: {
    borderRadius: "10px",
    width: "9.5rem",
    height: "9.375rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0.75rem",
  },
  image1: {
    background: theme.palette.common.orange,
  },
  image2: {
    background: theme.palette.common.green,
    color: theme.palette.common.white,
  },
  image3: {
    background: theme.palette.common.green,
    color: theme.palette.common.white,
  },
  carouselItemText: {
    fontFamily: "Source Sans Pro",
    fontWeight: 400,
    fontSize: "1.0625rem",
    lineHeight: "1.25rem",
  },
}));
