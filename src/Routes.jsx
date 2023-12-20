import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} key="home" />
      <Route path="/statistics" component={Statistics} key="statistics" />
      <Route path="/about" component={About} key="about" />
    </Switch>
  );
};

export default Routes;
