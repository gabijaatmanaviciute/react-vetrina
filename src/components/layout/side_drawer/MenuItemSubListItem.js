import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";

function MenuItemSubListItem({ subListItem }) {
  const [isActive, setIsActive] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    setIsActive(location.pathname == `/${subListItem.destination}`);
  }, [location]);

  const subListItemClickHandler = () => {
    history.push(subListItem.destination);
  };

  return (
    <ListItem
      button
      onClick={subListItemClickHandler}
      key={subListItem.name}
      className={`${classes.subListItem} ${isActive ? classes.activeItem : ""}`}
      disableGutters
    >
      <ListItemText className={classes.subListItemText}>
        {subListItem.name}
      </ListItemText>
    </ListItem>
  );
}

export default MenuItemSubListItem;

const useStyles = makeStyles((theme) => ({
  subListItem: {
    padding: "0.625rem 0 0.625rem 3.5rem",
    background: "#E9F8FE",
    "&:hover": {
      background: "#E9F8FE",
    },
  },
  subListItemText: {
    margin: 0,
    "& .MuiTypography-body1": {
      ...theme.typography.drawerListItemText,
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  },
  activeItem: {
    color: theme.palette.primary.main,
  },
}));
