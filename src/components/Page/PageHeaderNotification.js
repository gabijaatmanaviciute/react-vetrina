import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core";

const HeaderNotification = () => {
const classes = useSyles();

  return (
    <Typography className={classes.HeaderNotification}>
      <SvgIcon>Icon</SvgIcon>
      What's new // badge
    </Typography>
  );
};

export default HeaderNotification;

const useSyles = makeStyles({
    HeaderNotification: {
      color: "#103B66",
    }
})
