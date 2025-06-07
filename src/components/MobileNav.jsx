import { useState } from "react";
import styles from "./MobileNav.module.css";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import PropTypes from "prop-types";

function MobileNav({ isSticky }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <Logo />
      <button onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
        <IoMdMenu size="24" color="#333" />
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs">AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

MobileNav.propTypes = {
  isSticky: PropTypes.bool,
};
export default MobileNav;
