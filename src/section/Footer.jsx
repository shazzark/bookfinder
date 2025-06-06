import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import styles from "./footer.module.css";
import styles from "./Footer.modules.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Column 1 - Logo */}
        <div className={styles.footerColumn}>
          <Logo />
        </div>

        {/* Column 2 - Navigation */}
        <div className={styles.footerColumn}>
          <h3>Navigate quick</h3>
          <ul className={styles.mainNavList}>
            <li className={styles.mainNavLink}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.mainNavLink}>
              <NavLink to="/Pricing">Pricing</NavLink>
            </li>
            <li className={styles.mainNavLink}>
              <NavLink to="/Product">Product</NavLink>
            </li>
            <li className={styles.mainNavLink}>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li className={styles.mainNavLink}>
              <NavLink to="/AboutUs">About Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Column 3 - Mailing List */}
        <div className={styles.footerColumn}>
          <h3>Join our mailing list</h3>
          <p>
            Be the first to discover new book releases, exclusive author
            interviews and curated reading lists
          </p>
          <form className={styles.mailingForm}>
            <input type="email" placeholder="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Your BookFinder. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookies Settings</a>
        </div>
        <div className={styles.socialIcons}>
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
