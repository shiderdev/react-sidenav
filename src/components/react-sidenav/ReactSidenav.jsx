import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./react-sidenav.css";

const menuFactory = (menuItem) => {
  return (
    <NavItem
      key={menuItem.id}
      eventKey={menuItem.id}
      navitemClassName="nav-item2"
      onClick={menuItem.command}
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
