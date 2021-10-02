import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const GreetingBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.greetingBanner}>
      <Typography className={classes.greetingText}>Welcome Mario!</Typography>
      <Typography className={classes.greetingLink} component="a">app.vetrinalive.it/fenoh-store</Typography>
    </div>
  );
};

export default GreetingBanner;

const useStyles = makeStyles({
  greetingBanner: {
    position: "relative",
    height: "11.375rem",
    top: "3.75rem",
    background: "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)",
    padding: "2.5rem 2.3125rem"
  },
  greetingText: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "2.125rem",
    lineHeight: "2.4375rem",
    color: "#FFFFFF"
  }
});
