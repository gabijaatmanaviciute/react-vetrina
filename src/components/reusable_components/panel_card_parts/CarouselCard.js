import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

function CarouselCard({ undertext, imageLink }) {
  const classes = useStyles();

  return (
    <Box className={classes.carouselBox}>
      <Box className={classes.carouselImage}>
        <img src={imageLink} alt="Carousel card media" />
      </Box>
      <Typography className={classes.carouselItemText}>{undertext}</Typography>
    </Box>
  );
}

export default CarouselCard;

const useStyles = makeStyles((theme) => ({
  carouselBox: {
    marginRight: "3.125rem",
  },
  carouselImage: {
    borderRadius: "10px",
    maxWidth: "9.5rem",
    height: "9.375rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0.75rem",
    overflow: "hidden",

  },
  carouselItemText: {
    minHeight: 40,
    maxHeight: 40,
    textTransform: "capitalize",
    textOverflow: "elleipsis",
    fontFamily: "Source Sans Pro",
    fontWeight: 400,
    fontSize: "1.0625rem",
    lineHeight: "1.25rem",
  },
}));
