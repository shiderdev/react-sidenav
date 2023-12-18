import "app.css";
import "normalize.css";
import "primeicons/primeicons.css";
import { useCallback, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ReactSidenavWithPrimereact from "./components/react-sidenav-with-primereact/ReactSidenavWithPrimereact";
import ReactSidenav from "./components/react-sidenav/ReactSidenav";
import menu from "./menu";
import About from "./pages/About";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

const demoEnum = {
  reactSidenav: "React Sidenav",
  reactSideNavWithPrimereact: "React Sidenav with Primereact",
  reactSideNavWithPrimereactImproved: "React Sidenav with Primereact (Improved)",
};

const App = () => {
  const [demo, setDemo] = useState(demoEnum.reactSideNavWithPrimereact);
  const [sidenavIsExpanded, setSidenavIsExpanded] = useState(false);
  const onSelectDemo = (selectedDemo) => setDemo(selectedDemo);
  const history = useHistory();
  const navigationFactory = useCallback(
    (route) => () => {
      if (typeof route !== "string") return;

      history.push(route);
    },
    [history]
  );

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {demo === demoEnum.reactSidenav ? (
          <ReactSidenav
            isExpanded={sidenavIsExpanded}
            setIsExpanded={setSidenavIsExpanded}
            menu={menu(navigationFactory)}
          />
        ) : null}
        {demo === demoEnum.reactSideNavWithPrimereact ? (
          <ReactSidenavWithPrimereact
            isExpanded={sidenavIsExpanded}
            setIsExpanded={setSidenavIsExpanded}
            menu={menu(navigationFactory)}
          />
        ) : null}

        <main
          style={{
            backgroundColor: "lightcoral",
            display: "flex",
            marginLeft: sidenavIsExpanded ? "240px" : "64px",
            transition: "margin-left 0.2s",
            padding: "10px 15px",
          }}
        >
          <Switch>
            <Route path="/" exact component={Home} key="home" />
            <Route path="/statistics" component={Statistics} key="statistics" />
            <Route path="/about" component={About} key="about" />
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
