import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import QuarterlyReports from "./pages/QuarterlyReports";
import HumanResources from "./pages/HumanResources";
import Research from "./pages/Research";
import Profits from "./pages/Profits";
import Settings from "./pages/Settings";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} key="home" />
      <Route
        exact
        path="/statistics/quarterly-reports"
        component={QuarterlyReports}
        key="/statistics/quarterly-reports"
      />
      <Route
        path="/statistics/quarterly-reports/human-resources/"
        component={HumanResources}
        key="/statistics/quarterly-reports/human-resources/"
      />
      <Route
        path="/statistics/quarterly-reports/research"
        component={Research}
        key="/statistics/quarterly-reports/research"
      />
      <Route path="/statistics/profits" component={Profits} key="/statistics/profits" />
      <Route path="/settings" component={Settings} key="/settings" />
    </Switch>
  );
};

export default Routes;
