import { Fragment, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import MenuItemSubList from "./MenuItemSubList";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import { ReactComponent as ArrowDownIcon } from "assets/icons/arrow-down-icon.svg";
import { ReactComponent as ArrowUpIcon } from "assets/icons/arrow-up-icon.svg";

function MenuListItem({ item }) {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const classes = useStyles(isActive);

  useEffect(() => {
    setIsActive(location.pathname == `/${item.destination}`);
  }, [location]);

  const listItemClickHandler = () => {
    if (item.destination !== null) {
      history.push(item.destination);
    }
    if (item.expandable) {
      setIsOpen(() => !isOpen);
    }
  };

  return (
    <Fragment>
      <div className={classes.menuItemWrapper}>
        <div className={classes.activeItemBar} />
        <ListItem
          button
          onClick={listItemClickHandler}
          key={item.name}
          className={`${classes.menuListItem} ${
            isActive ? classes.activeItem : ""
          } ${isOpen ? classes.openItem : ""}`}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <img src={require(`assets/icons/${item.icon_title}`).default} />
          </ListItemIcon>
          <ListItemText disableTypography className={classes.listItemText}>
            {item.name}
          </ListItemText>
          {item.expandable && !isOpen && (
            <ArrowDownIcon className={classes.arrowIcon} />
          )}
          {item.expandable && isOpen && (
            <ArrowUpIcon className={classes.arrowIcon} />
          )}
        </ListItem>
      </div>
      {isOpen && <MenuItemSubList sublist={item.sub_list} />}
    </Fragment>
  );
}

export default MenuListItem;

const useStyles = makeStyles((theme) => ({
  menuItemWrapper: {
    display: "flex",
    height: "2rem",
  },
  activeItemBar: {
    visibility: (isActive) => (isActive ? "visible" : "hidden"),
    width: "4px",
    height: "100%",
    marginRight: "3px",
    background: theme.palette.primary.main,
    borderRadius: "4px",
  },
  menuListItem: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    height: "100%",
    borderRadius: "4px",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  activeItem: {
    background: "#F7F7F7",
    color: theme.palette.primary.main,
  },
  openItem: {
    color: theme.palette.primary.main,
  },
  listItemIcon: {
    marginLeft: "0.8125rem",
    marginRight: "1rem",
    minWidth: 0,
    width: "1.25rem",
    height: "1.25rem",
  },
  listItemText: {
    padding: 0,
    margin: 0,
    ...theme.typography.drawerListItemText,
  },
  arrowIcon: {
    margin: "0 1.25rem",
  },
}));
