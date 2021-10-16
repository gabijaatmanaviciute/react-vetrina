import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardTitle from "./CardTitle";

function PanelCard({
  cardIcon,
  cardTitle,
  cardHeaderSideElement,
  cardFooterElement,
  children
}) {
  const classes = useStyles();

  return <Card>
      <Grid container direction="column" className={classes.cardContainer}>
        <Grid item className={classes.panelHeader}>
          <CardTitle icon={cardIcon} title={cardTitle} />
          {cardHeaderSideElement || <div />}
        </Grid>
        <Grid item>
          <CardContent>
            {children}
          </CardContent>
        </Grid>
        <Grid item className={classes.panelFooter} onClick={popUpOpenHandler}>
          {cardFooterElement}
        </Grid>
      </Grid>
  </Card>;
}

export default PanelCard;

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
}));
