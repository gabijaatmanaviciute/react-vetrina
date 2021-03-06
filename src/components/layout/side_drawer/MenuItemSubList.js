import MenuItemSubListItem from "./MenuItemSubListItem";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core";

function MenuItemSubList({ sublist, currentPageTitleHandler }) {
  const classes = useStyles();

  console.log(sublist);
  return (
    <List className={classes.subList}>
      {sublist &&
        sublist.map((item) => (
          <MenuItemSubListItem
            subListItem={item}
            currentPageTitleHandler={currentPageTitleHandler}
          />
        ))}
    </List>
  );
}

export default MenuItemSubList;

const useStyles = makeStyles((theme) => ({
  subList: {
    padding: 0,
    margin: 0,
  },
}));
