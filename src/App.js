import Layout from "./components/layout/Layout";
import Dashboard from "components/pages/dashboard/Dashboard";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./UI/Theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Layout>
          <Switch>
            <Route exact path="/" component={() => <Dashboard />} />
            <Route exact path="/orders" component={() => <div>Orders</div>} />
            <Route exact path="/customers" component={() => <div>Customers</div>} />
            <Route exact path="/delivery_options" component={() => <div>Delivery Options</div>} />
            <Route exact path="/payment_options" component={() => <div>Payment Options</div>} />
            <Route exact path="/store_design" component={() => <div>Store Design</div>} />
            <Route exact path="/subscription" component={() => <div>Subscription</div>} />
            <Route exact path="/integrations" component={() => <div>Integrations</div>} />
            <Route exact path="/extensions" component={() => <div>Extensions</div>} />
            <Route exact path="/settings" component={() => <div>Settings</div>} />
            <Route exact path="/log_out" component={() => <div>Log out</div>} />
            <Route exact path="/customer_support" component={() => <div>Customer support</div>} />
            <Route exact path="/share_your_shop" component={() => <div>Share your shop</div>} />
            <Route exact path="/view_your_shop" component={() => <div>View your shop</div>} />
          </Switch>
          </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

