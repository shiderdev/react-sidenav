import "app.css";
import "normalize.css";
import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

const demoEnum = {
  reactSidenav: "React Sidenav",
  reactSideNavWithPrimereact: "React Sidenav with Primereact",
  reactSideNavWithPrimereactImproved: "React Sidenav with Primereact (Improved)",
};

const App = () => {
  const [demo, setDemo] = useState(demoEnum.reactSideNavWithPrimereact);
  const onSelectDemo = (selectedDemo) => setDemo(selectedDemo);

  const history = useHistory();

  return (
    <>
      <header style={{ backgroundColor: "cyan" }}>
        <button
          style={{ backgroundColor: demo === demoEnum.reactSidenav ? "grey" : "lightyellow" }}
          onClick={() => onSelectDemo(demoEnum.reactSidenav)}
        >
          {demoEnum.reactSidenav}
        </button>
        <button
          style={{
            backgroundColor: demo === demoEnum.reactSideNavWithPrimereact ? "grey" : "lightyellow",
          }}
          onClick={() => onSelectDemo(demoEnum.reactSideNavWithPrimereact)}
        >
          {demoEnum.reactSideNavWithPrimereact}
        </button>
        <button
          style={{
            backgroundColor:
              demo === demoEnum.reactSideNavWithPrimereactImproved ? "grey" : "lightyellow",
          }}
          onClick={() => onSelectDemo(demoEnum.reactSideNavWithPrimereactImproved)}
        >
          {demoEnum.reactSideNavWithPrimereactImproved}
        </button>
      </header>
      <div>
        <SideNav>
          <SideNav.Toggle />
          <SideNav.Nav selected={history?.location?.pathname}>
            <NavItem eventKey="home">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Charts</NavText>
              <NavItem eventKey="charts/linechart">
                <NavText>Line Chart</NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>Bar Chart</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <main style={{ backgroundColor: "lightcoral", display: "flex" }}>
          <Switch>
            <Route path="/" exact component={Home} key="home" />
            <Route path="/statistics" component={Statistics} key="statistics" />
            <Route path="/about" component={About} key="about" />
          </Switch>
        </main>
      </div>
    </>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
};

export default App;
