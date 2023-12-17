import { TieredMenu } from "primereact/tieredmenu";
import { PanelMenu } from "primereact/panelmenu";
import PropTypes from "prop-types";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css";
import "./react-sidenav-with-primereact.css";

const ReactSidenavWithPrimereact = ({ isExpanded, setIsExpanded, menu }) => {
  return (
    <div
      style={{
        transition: "width 0.2s",
        width: isExpanded ? "240px" : "64px",
        position: "absolute",
        top: "70px",
        bottom: 0,
        left: 0,
      }}
    >
      <PanelMenu
        model={[
          {
            id: "toggle",
            icon: isExpanded ? "pi pi-times" : "pi pi-bars",
            label: "",
            command: () => setIsExpanded(!isExpanded),
            className: "toggle-button",
          },
          ...menu,
        ]}
        orientation="vertical"
        style={{
          zIndex: isExpanded ? 2 : -1,
          visibility: isExpanded ? "visible" : "hidden",
          width: isExpanded ? "240px" : "64px",
        }}
      />

      <TieredMenu
        model={[
          {
            id: "toggle",
            icon: isExpanded ? "pi pi-times" : "pi pi-bars",
            label: "",
            command: () => setIsExpanded(!isExpanded),
            className: "toggle-button",
          },
          ...menu,
        ]}
        orientation="vertical"
        style={{
          zIndex: isExpanded ? -1 : 2,
          visibility: isExpanded ? "hidden" : "visible",
          width: isExpanded ? "240px" : "64px",
        }}
      />
    </div>
  );
};

ReactSidenavWithPrimereact.propTypes = {
  isExpanded: PropTypes.bool,
  setIsExpanded: PropTypes.func,
  menu: PropTypes.array,
};

export default ReactSidenavWithPrimereact;
