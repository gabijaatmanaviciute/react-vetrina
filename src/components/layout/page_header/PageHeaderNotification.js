import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core";
import zapIcon from "assets/icons/zap-icon.svg";

const HeaderNotification = ({ notifDrawerOpenHandler }) => {
  const classes = useSyles();

  return (
    <Typography
      className={classes.HeaderNotification}
      onClick={notifDrawerOpenHandler}
      component="h6"
    >
      <Badge
        badgeContent={2}
        color="secondary"
        className={classes.notificationBadge}
      >
        <img src={zapIcon} alt="Zap Icon" className={classes.zapIcon} />
        <Typography variant="h6" component="p" className={classes.notificationText}>
          What's new
        </Typography>
      </Badge>
    </Typography>
  );
};

export default HeaderNotification;

const useSyles = makeStyles((theme) => ({
  HeaderNotification: {
    color: "#103B66",
    "&:hover": {
      cursor: "pointer",
    }
  },
  zapIcon: {
    height: "1.25rem",
    marginRight: "7px",
  },
  notificationText: {
    ...theme.typography.h6,
    fontFamily: "Source Sans Pro",
    fontWeight: 400,
  },
}));
