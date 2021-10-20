import { makeStyles, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

function NotificationCard({ date, title, image, description, link }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <Box>
        <Typography variant="bodySmall" className={classes.notifDate}>
          {date.slice(0, 10)}
        </Typography>
        <Typography variant="h6">{title}</Typography>
        <Box className={classes.notifImageBox}>
          <img src={image} width="250px" alt="Notification card media" />
        </Box>
        <Typography variant="bodyMedium" component="p" className={classes.cardDescription}>
          {description}
        </Typography>
        <Link href={link} target="_blank" className={classes.cardLink}>
          Learn more
        </Link>
      </Box>
    </Card>
  );
}

export default NotificationCard;

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "auto",
    marginBottom: "1rem",
  },
  notifDate: {
    display: "inline-block",
    fontSize: "0.9rem",
    marginBottom: "0.75rem",
  },
  notifImageBox: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    margin: "1rem 0",
  },
  cardDescription: {
    maxHeight: 60,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cardLink: {
    display: "inline-block",
    paddingTop: "1rem",
    width: "100%",
    textAlign: "center",
    fontWeight: 600,
  },
}));
