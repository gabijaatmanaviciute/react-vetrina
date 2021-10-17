import { useState } from "react";
import { storeList } from "utils/menu-data";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { ReactComponent as ArrowDownIcon } from "assets/icons/arrow-down-icon.svg";

function ShopSelectDropdown() {
  const [selectedShop, setSelectedShop] = useState("Fenoh Store");

  const classes = useStyles();

  const selectedShopChangeHandler = (event) => {
    setSelectedShop(event.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <label htmlFor="shop-select" className={classes.formLabel}>
        Select your shop
      </label>

      <Select
        value={selectedShop}
        onChange={selectedShopChangeHandler}
        className={classes.select}
        IconComponent={() => <ArrowDownIcon className={classes.arrowIcon} />}
      >
        {storeList.map((item) => (
          <MenuItem value={item} key={item} className={classes.selectOption}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ShopSelectDropdown;

const useStyles = makeStyles((theme) => ({
  formControl: {
    position: "static",
    padding: "4.0625rem 1.5rem 1.5rem 1rem",
  },
  select: {
    marginTop: "0.9375rem",
    padding: "1rem 1.25rem",
    borderRadius: "5px",
    background: "transparent",
    ...theme.typography.input,
    "&:focus": {
      outline: "none",
      border: `1px solid ${theme.palette.primary.main}`,
    },
    "& .MuiOutlinedInput-input": {
      padding: 0,
    },
    "& svg": {
      fill: theme.palette.common.black,
    },
  },
  formLabel: {
    ...theme.typography.label,
  },
  selectOption: {
    borderRadius: "5px",
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
  },
  arrowIcon: {
    "&:hover": {
      fill: "black",
    },
  },
}));
