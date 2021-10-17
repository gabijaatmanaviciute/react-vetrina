import { makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { ReactComponent as ArrowDownIcon } from "assets/icons/arrow-down-icon.svg";

function TimeIntervalDropdown({ selectedPeriod, selectedPeriodChangeHandler }) {
  const classes = useStyles();
  const dropDownOptions = ["Today", "This week", "This month"];

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={selectedPeriod}
        onChange={selectedPeriodChangeHandler}
        className={classes.select}
        IconComponent={() => <ArrowDownIcon className={classes.arrowIcon} />}
        disableUnderline
      >
        {dropDownOptions.map((item) => (
          <MenuItem value={item} key={item} className={classes.selectOption}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TimeIntervalDropdown;

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
    "& svg": {
      fill: "#666666",
    },
  },
  select: {
    ...theme.typography.input,
    color: "#666666",
    "& .MuiSelect-select": {
      paddingRight: 0,
    },
  },
  selectOption: {
    borderRadius: "5px",
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
  },
  arrowIcon: {
    width: "0.9rem",
    margin: "0 0.1875rem 0 0.6875rem",
  },
}));
