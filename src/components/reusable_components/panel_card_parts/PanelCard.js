import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import Box from "@material-ui/core/Box";

function PanelCard({
  cardIcon,
  cardTitle,
  cardHeaderSideElement,
  cardFooterElement,
  children,
}) {
  const classes = useStyles();

  return (
    <Card>
      <Box className={classes.cardContainer}>
        <Box className={classes.panelHeader}>
          <CardTitle icon={cardIcon} title={cardTitle} />
          {cardHeaderSideElement}
        </Box>
        <CardContent>{children}</CardContent>
        <Box className={classes.panelFooter}>
          {cardFooterElement}
        </Box>
      </Box>
    </Card>
  );
}

export default PanelCard;

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    minHeight: 190,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
