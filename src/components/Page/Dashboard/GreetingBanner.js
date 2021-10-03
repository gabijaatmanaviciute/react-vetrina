import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as ExternalLinkIcon } from "./../../../assets/icons/external-link-icon.svg";

const GreetingBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.greetingBanner}>
      <Typography className={classes.greetingText}>Welcome Mario!</Typography>
      <Typography className={classes.greetingLink}>
        <Link className={classes.linkText}>app.vetrinalive.it/fenoh-store</Link>
        <SvgIcon className={classes.linkIcon}>
          <ExternalLinkIcon />
        </SvgIcon>
      </Typography>
    </div>
  );
};

export default GreetingBanner;

const useStyles = makeStyles({
  greetingBanner: {
    display: "flex",
    alignContent: "center",
    position: "relative",
    height: "11.375rem",
    background:
      "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)",
    padding: "2.5rem 2.3125rem",
  },
  greetingText: {
    flex: 1,
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "2.125rem",
    lineHeight: "2.4375rem",
    color: "#FFFFFF",
  },
  greetingLink: {
    display: "flex",
    color: "#FFFFFF",
  },
  linkText: {
    color: "#FFFFFF",
    fontFamily: "Noto Sans HK",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "1.0625rem",
    lineHeight: "1.375rem",
    textDecoration: "underline"
  },
  linkIcon: {
    color: "#FFFFFF",
  },
});
