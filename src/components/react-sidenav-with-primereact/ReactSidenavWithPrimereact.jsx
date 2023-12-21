import { PanelMenu } from "primereact/panelmenu";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { TieredMenu } from "primereact/tieredmenu";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import "./react-sidenav-with-primereact.css";

const ReactSidenavWithPrimereact = ({ isExpanded, setIsExpanded, menu }) => {
  const location = useLocation();
  return (
    <>
      <PanelMenu
        className="sidenav-expanded"
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
          visibility: isExpanded ? "visible" : "hidden",
          width: isExpanded ? "240px" : "64px",
        }}
      />

      <TieredMenu
        className="sidenav-retracted"
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
          visibility: isExpanded ? "hidden" : "visible",
          width: isExpanded ? "240px" : "64px",
        }}
      />
    </>
  );
};

ReactSidenavWithPrimereact.propTypes = {
  isExpanded: PropTypes.bool,
  setIsExpanded: PropTypes.func,
  menu: PropTypes.array,
};

export default ReactSidenavWithPrimereact;
