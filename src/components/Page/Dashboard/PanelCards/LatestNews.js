import React from "react";
import { ReactComponent as FileTextIcon } from "assets/icons/file-text-icon.svg";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import CardTitle from "../PanelCardParts/CardTitle";

function LatestNews() {
  const classes = useStyles();

  return (
    <Grid container>
      <CardTitle title="Latest news" icon={<FileTextIcon />} />
    </Grid>
  );
}

export default LatestNews;

const useStyles = makeStyles({});
