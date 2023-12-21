import { PanelMenu } from "primereact/panelmenu";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { TieredMenu } from "primereact/tieredmenu";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const ReactSidenavWithPrimereactNoStyle = ({ isExpanded, setIsExpanded, menu }) => {
  const location = useLocation();

  return (
    <>
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
          visibility: isExpanded ? "visible" : "hidden",
          width: isExpanded ? "240px" : "64px",
          position: "fixed",
          top: "120px",
          left: 0,
          bottom: 0,
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
          visibility: isExpanded ? "hidden" : "visible",
          width: isExpanded ? "240px" : "64px",
          position: "fixed",
          top: "120px",
          left: 0,
          bottom: 0,
        }}
      />
    </>
  );
};

ReactSidenavWithPrimereactNoStyle.propTypes = {
  isExpanded: PropTypes.bool,
  setIsExpanded: PropTypes.func,
  menu: PropTypes.array,
};

export default ReactSidenavWithPrimereactNoStyle;
