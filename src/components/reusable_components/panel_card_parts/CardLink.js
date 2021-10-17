import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/styles";

function CardLink({ linkText, linkIcon, linkColor, href, onClick }) {
  const theme = useTheme();
  
  const color = {
    color: linkColor ? linkColor : theme.palette.primary.main
  }

  const classes = useStyles(color);
  return (
    <div className={classes.cardLink} onClick={onClick}>
      <Link href={href} target="_blank" className={classes.linkText}>
        {linkText}
      </Link>
      {linkIcon && <div className={classes.linkIcon}>{linkIcon}</div>}
    </div>
  );
}

export default CardLink;

const useStyles = makeStyles((theme) => ({
  cardLink: {
    "&:hover": {
      cursor: "pointer",
    },
    display: "flex",
    alignItems: "top",
  },
  linkText: {
    ...theme.typography.panelLinks,
    color: (color) => color.color,
    marginRight: "0.75rem",
  },
  linkIcon: {
    "& .MuiSvgIcon-root": {
      color: (color) => color.color,
      width: "1.25rem",
      height: "1.25rem",
    },
  },
}));
