// import PageNav from "../components/PageNav";
import styles from "./AboutUs.module.css";
import { RiTeamLine } from "react-icons/ri";
import { VscSymbolColor } from "react-icons/vsc";
import { GiBoxingGlove } from "react-icons/gi";

function AboutUs() {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.container}>
        <div className={styles.grid2Cols}>
          <div className={styles.gridColWithS}>
            <h1> About</h1>
            <p>
              {" "}
              BookFinder is your go-to destination for discovering, reading, and
              bookmarking books effortlessly. Whether you’re a passionate
              reader, a student, or someone looking for the perfect book to dive
              into, BookFinder has it all.
            </p>

            <a className={styles.Link} href="#">
              &#8213; Read more
            </a>
          </div>
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
      </div>
    </section>
  );
}

export default AboutUs;
