import Dashboard from "./Page/Dashboard/Dashboard";
import SideDrawer from "./SideDrawer/SideDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./UI/Theme"

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <SideDrawer />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
