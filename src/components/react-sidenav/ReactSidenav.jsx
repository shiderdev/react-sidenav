import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Route, Switch, useHistory, Link, NavLink } from "react-router-dom";
import "./react-sidenav.css";
import PropTypes from "prop-types";

const menuFactory = (menuItem) => {
  return (
    <NavItem
      key={menuItem.id}
      eventKey={menuItem.id}
      navitemClassName="nav-item2"
      onClick={menuItem.command}
      // componentClass={(props) => {
      //   return (
      //     // <Link to={menuItem.id} className={props.className} style={props.style} role={props.role}>
      //     //   {props.children}
      //     // </Link>
      //     <div className={props.className} style={props.style} role={props.role}>
      //       <Link
      //         to={menuItem.id}
      //         className={props.className}
      //         style={props.style}
      //         role={props.role}
      //       >
      //         {props.children}
      //       </Link>
      //     </div>
      //   );
      // }}
      className="nav-item"
    >
      {menuItem.icon ? (
        <NavIcon className="nav-icon">
          <div className="icon-wrapper">
            <i className={menuItem.icon} />
          </div>
        </NavIcon>
      ) : null}
      <NavText>{menuItem.label}</NavText>
      {/* recursively add submenus */}
      {Array.isArray(menuItem.items) && menuItem.items.length > 0
        ? menuItem.items.map((item) => menuFactory(item))
        : null}
    </NavItem>
  );
};

const ReactSidenav = ({ isExpanded, setIsExpanded, menu }) => {
  const history = useHistory();

  return (
    <SideNav
      className="react-sidenav"
      expanded={isExpanded}
      onToggle={(some) => {
        console.log("some", some);
        setIsExpanded(some);
      }}
      onSelect={(eventKey) => {
        if (typeof eventKey === "function") {
          eventKey();
        }
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav selected={history?.location?.pathname} defaultSelected="home">
        {menu.map((item) => menuFactory(item))}
        {/* <NavItem eventKey="home" className="nav-item">
          <NavIcon className="nav-icon">
            <div className="icon-wrapper">
              <i className="pi pi-home" />
            </div>
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <div className="icon-wrapper">
              <i className="pi pi-chart-bar" />
            </div>
          </NavIcon>
          <NavText>Charts</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>Line Chart</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Bar Chart</NavText>
          </NavItem>
        </NavItem> */}
      </SideNav.Nav>
    </SideNav>
  );
};

ReactSidenav.propTypes = {
  isExpanded: PropTypes.bool,
  setIsExpanded: PropTypes.func,
  menu: PropTypes.array,
};
export default ReactSidenav;
