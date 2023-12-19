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
import ReactSidenavWithPrimereactNoStyle from "./components/react-sidenav-with-primereact-no-style/ReactSidenavWithPrimereactNoStyle";
import Header from "./components/header/Header";

const demoEnum = {
  reactSidenav: "@trendmicro/react-sidenav",
  reactSideNavWithPrimereact: "React Side Navigation with Primereact Menus",
  reactSideNavWithPrimereactUnstyled:
    "React Side Navigation with Primereact Menus(Unstyled for comparison)",
};

const App = () => {
  const [demo, setDemo] = useState(demoEnum.reactSideNavWithPrimereact);
  const [sidenavIsExpanded, setSidenavIsExpanded] = useState(false);
  const history = useHistory();
  const navigationFactory = useCallback(
    (route) => () => {
      if (typeof route !== "string") return;
      history.push(route);
    },
    [history]
  );
  const onDemoChange = useCallback((e) => setDemo(e.target.value), [setDemo]);

  return (
    <>
      <Header demo={demo} onDemoChange={onDemoChange} demoEnum={demoEnum} />
      <div className="under-header-area">
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
        {demo === demoEnum.reactSideNavWithPrimereactUnstyled ? (
          <ReactSidenavWithPrimereactNoStyle
            isExpanded={sidenavIsExpanded}
            setIsExpanded={setSidenavIsExpanded}
            menu={menu(navigationFactory)}
          />
        ) : null}

        <main
          style={{
            marginLeft: sidenavIsExpanded ? "240px" : "64px",
            transition: "margin-left 0.2s",
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
