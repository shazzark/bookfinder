import { RiTeamLine } from "react-icons/ri";
import { VscSymbolColor } from "react-icons/vsc";
import { GiBoxingGlove } from "react-icons/gi";
import styles from "./WhyUs.module.css";

function WhyUs() {
  return (
    <section>
      <div>
        <div>
          <h1> whhy us?</h1>
          <p></p>
        </div>

        <ul>
          <li> what we do</li>
          <li> what we do</li>
          <li> what we do</li>
          <li> what we do</li>
        </ul>

        <div>
          <ul className={styles.unorderList}>
            <li>
              <RiTeamLine className={styles.iconD} />
              <div className={styles.pandh2}>
                <h2>Team</h2> <p> synergy & chemistry</p>
              </div>
            </li>

            <li>
              <VscSymbolColor className={styles.iconD} />
              <div className={styles.pandh2}>
                <h2>Culture</h2> <p> our secret</p>
              </div>
            </li>

            <li>
              <GiBoxingGlove className={styles.iconD} />
              <div className={styles.pandh2}>
                <h2>Why Us</h2> <p> Why not</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
