import PropTypes from "prop-types";

const Header = ({ demo, onDemoChange, demoEnum }) => {
  return (
    <header>
      <form action="#" onChange={onDemoChange}>
        <div>
          <input
            type="radio"
            id={demoEnum.reactSidenav}
            value={demoEnum.reactSidenav}
            checked={demo === demoEnum.reactSidenav}
          />
          <label htmlFor={demoEnum.reactSidenav}>{demoEnum.reactSidenav} </label>
        </div>
        <div>
          <input
            type="radio"
            id={demoEnum.reactSideNavWithPrimereact}
            value={demoEnum.reactSideNavWithPrimereact}
            checked={demo === demoEnum.reactSideNavWithPrimereact}
          />
          <label htmlFor={demoEnum.reactSideNavWithPrimereact}>
            {demoEnum.reactSideNavWithPrimereact}
          </label>
        </div>
        <div>
          <input
            type="radio"
            id={demoEnum.reactSideNavWithPrimereactUnstyled}
            value={demoEnum.reactSideNavWithPrimereactUnstyled}
            checked={demo === demoEnum.reactSideNavWithPrimereactUnstyled}
          />
          <label htmlFor={demoEnum.reactSideNavWithPrimereactUnstyled}>
            {demoEnum.reactSideNavWithPrimereactUnstyled}
          </label>
        </div>
      </form>
    </header>
  );
};

Header.propTypes = {
  demo: PropTypes.string,
  onDemoChange: PropTypes.func,
  demoEnum: PropTypes.object,
};

export default Header;
