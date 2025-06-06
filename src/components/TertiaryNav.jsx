import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { IoIosContact } from "react-icons/io";
import styles from "./TertiaryNav.module.css";
// import

function TertiaryNav() {
  return (
    <nav className={styles.TertiaryNav}>
      <Logo />
      <div className={styles.TertiaryNavGroup}>
        <ul className={styles.TertiaryNavList}>
          <li className={styles.TertiaryNavLink}>
            <NavLink to="/">Home</NavLink>
          </li>

          <li className={styles.TertiaryNavLink}>
            <NavLink to="/MyBooks">My Books</NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.searchContainer}>
        {/* <select className={styles.select}>
          <option className={styles.option} value="Genries">
            Genries
          </option>
          <option className={styles.option} value="Scifi">
            Scifi
          </option>
          <option className={styles.option} value="Action">
            Action
          </option>
        </select> */}

        <input
          type="text"
          placeholder="Search Books..."
          className={styles.searchInput}
        />
        <IoIosContact color="#333" size={24} cursor="pointer" />
      </div>
    </nav>
  );
}

export default TertiaryNav;
