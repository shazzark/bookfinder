import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import SecondaryNav from "./SecondaryNav";
import PropTypes from "prop-types";

function PageNav({ isSticky }) {
  return (
    <nav className={`${styles.Mainnav} ${isSticky ? styles.sticky : ""}`}>
      <Logo />
      <ul className={styles.mainNavList}>
        <li className={styles.mainNavLink}>
          <NavLink to="/">Home</NavLink>
        </li>

        {/* <li className={styles.mainNavLink}>
          <NavLink to="/Pricing">pricing</NavLink>
        </li> */}

        <li className={styles.mainNavLink}>
          <NavLink to="/Product">product</NavLink>
        </li>

        <li className={styles.mainNavLink}>
          <NavLink to="/Contact">contact</NavLink>
        </li>

        <li className={`${styles.mainNavLink}  `}>
          <NavLink to="/AboutUs">AboutUs</NavLink>
        </li>
      </ul>
      <SecondaryNav />
    </nav>
  );
}

PageNav.propTypes = {
  isSticky: PropTypes.bool,
};

export default PageNav;
