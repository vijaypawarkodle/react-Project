import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg text-white bg-${props.mode}`}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            {props.home}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggler}
                />
                <label
                  className="form-check-label"
                  htmlfor="flexSwitchCheckDefault"
                >
                  Enable dark mode
                </label>
              </div>
              {/* <button className="btn btn-outline-success" type="submit">
                Search1
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  home: "home",
  about: "Aoubt Us",
};

export { Navbar };
