import { NavLink } from "react-router-dom";
// import { CiShoppingCart } from "react-icons/ci";
import styles from "./SecondaryNav.module.css";

function SecondaryNav() {
  return (
    <nav>
      <ul className={styles.secondaryNavList}>
        <li className={styles.secondaryNavLink}>
          <NavLink to="/Login" className={`  ${styles.ctaLink}`}>
            Login
          </NavLink>
        </li>

        {/* <li>
          <NavLink>
            <CiShoppingCart color="#333" size={24} />
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default SecondaryNav;
