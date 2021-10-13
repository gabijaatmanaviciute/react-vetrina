import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Box from "@material-ui/core/Box";
import { ReactComponent as ExternalLinkIcon } from "assets/icons/external-link-icon.svg";

const GreetingBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.greetingBanner}>
      <Typography className={classes.greetingText} variant="h1">
        Welcome Mario!
      </Typography>
      <Box className={classes.greetingLink}>
        <Link
          className={classes.linkText}
          variant="h5"
          href="https://app.vetrinalive.com/gabi?_ga=2.153177656.1663349020.1633860055-33672331.1633860055"
          target="_blank"
        >
          app.vetrinalive.it/fenoh-store
        </Link>
        <SvgIcon className={classes.linkIcon}>
          <ExternalLinkIcon />
        </SvgIcon>
      </Box>
    </Box>
  );
};

export default GreetingBanner;

const useStyles = makeStyles((theme) => ({
  greetingBanner: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "11.375rem",
    background:
      "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)",
    padding: "0 2.3125rem 3.9375rem",
  },
  greetingText: {
    flex: 1,
    fontFamily: "Source Sans Pro",
    fontWeight: 600,
    color: theme.palette.common.white,
  },
  greetingLink: {
    display: "flex",
    alignItems: "end",
    color: theme.palette.common.white,
  },
  linkText: {
    color: theme.palette.common.white,
    textDecoration: "underline",
    fontWeight: 500,
  },
  linkIcon: {
    marginLeft: "1rem",
    marginRight: "1px",
    width: "1.5rem",
    height: "1.5rem",
  },
}));
