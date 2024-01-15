import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-logo" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
