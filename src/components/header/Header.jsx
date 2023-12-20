import PropTypes from "prop-types";

const Header = ({ demo, onDemoChange, demoEnum }) => {
  return (
    <header>
      <form action="#" onChange={onDemoChange}>
        <div>
          <input
            type="radio"
            tabindex="1"
            id="1"
            name="demo"
            value={demoEnum.reactSidenav}
            checked={demo === demoEnum.reactSidenav}
          />
          <label htmlFor="1">{demoEnum.reactSidenav} </label>
        </div>
        <div>
          <input
            type="radio"
            id="2"
            name="demo"
            value={demoEnum.reactSideNavWithPrimereact}
            checked={demo === demoEnum.reactSideNavWithPrimereact}
          />
          <label htmlFor="2">{demoEnum.reactSideNavWithPrimereact}</label>
        </div>
        <div>
          <input
            type="radio"
            id="3"
            name="demo"
            value={demoEnum.reactSideNavWithPrimereactUnstyled}
            checked={demo === demoEnum.reactSideNavWithPrimereactUnstyled}
          />
          <label htmlFor="3">{demoEnum.reactSideNavWithPrimereactUnstyled}</label>
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
