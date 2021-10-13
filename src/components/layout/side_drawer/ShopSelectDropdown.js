import { useState } from "react";
import { storeList } from "utils/menu-data";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
// import { InputLabel } from "@material-ui/core";
// import { Select } from "@material-ui/core";
// import { MenuItem } from "@material-ui/core";

function ShopSelectDropdown() {
  const [selectedShop, setSelectedShop] = useState();

  const classes = useStyles();

  const selectedShopChangeHandler = (event) => {
    setSelectedShop(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <label htmlFor="shop-select" className={classes.formLabel}>Select your shop</label>
      <select
        id="shop-select"
        value={selectedShop}
        onChange={selectedShopChangeHandler}
        className={classes.select}
      >
        {storeList.map((item) => (
          <option value={item} key={item} className={classes.selectOption}>{item}</option>
        ))}
      </select>
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
        border: "1px solid rgba(10, 37, 64, 0.24)",
        borderRadius: "5px",
        ...theme.typography.input,
        "&:focus": {
            outline: "none",
            border: `1px solid ${theme.palette.primary.main}`
        },
        "&:after": {
            borderRadius: "5px"
        }
    },
    formLabel: {
        position: "static",
        ...theme.typography.label
    },
    selectOption: {
        // background: "#229966",
        borderRadius: "5px",
    }
}));
