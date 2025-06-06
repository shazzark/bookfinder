import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { TbBrandBooking } from "react-icons/tb";
function Logo() {
  return (
    <Link to="/" className={styles.Logo}>
      <TbBrandBooking />
      <span> Bookfinder</span>
    </Link>
  );
}

export default Logo;
