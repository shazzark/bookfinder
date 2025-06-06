import { Link } from "react-router-dom";
import { SiTimescale } from "react-icons/si";
// import PageNav from "../components/PageNav";

import styles from "./Hompage.module.css";
import { FaStar } from "react-icons/fa";
import PageNav from "../components/PageNav";
import FeaturedSection from "../section/FeaturedSection";
import Footer from "../section/Footer";
import Faq from "../section/Faq";
import Testimonials from "../section/Testimonials";

function Homepage() {
  return (
    <div>
      <main>
        <PageNav />
        <section className={styles.sectionHero}>
          <div className={styles.hero}>
            <div className="hero-text-box">
              <h1 className={styles.headingprimary}>
                Your Digital Library, Anytime, Anywhere.
                {/* <br /> BookFinder a place
              for book lovers to explore, store, and share their favorite reads. */}
              </h1>

              <p className={styles.herodescription}>
                A website that provides a seamless experience for managing your
                digital library. <br /> Start building your digital library
                today—join us and store your favorite reads.
              </p>
              <div className={styles.btncontainer}>
                <Link to="/app" className={`${styles.btn} ${styles.btna}`}>
                  {" "}
                  Get started
                </Link>
                {/* <a className={styles.btn} href="#">
                Get started
              </a> */}

                <Link className={`${styles.btn}  `} href="#">
                  Read now
                </Link>
              </div>
            </div>
            <div className={styles.icon}>
              <FaStar color="#82814c" size={18} />
              <FaStar color="#82814c" size={18} />
              <FaStar color="#82814c" size={18} />
              <FaStar color="#82814c" size={18} />
              <FaStar color="#82814c" size={18} />
              <p>5.0</p>
            </div>

            <div className={styles.HomepageReview}>
              <p> from 80+ review</p>
            </div>
            <div className={styles.grid5cols}>
              <div className={`${styles.herocards}  ${styles.firstCard}`}>
                <img
                  src="images/books1.png"
                  alt="books"
                  className={`${styles.heroimg}`}
                />
              </div>

              <div className={`${styles.herocards}   ${styles.secondCard}`}>
                <h2 className={styles.bold}>100 +</h2>
                <p>
                  Instant Book <br /> Search Daily{" "}
                </p>
              </div>

              <div className={`${styles.herocards}  ${styles.thirdCard}`}>
                <p className={styles.boldx}>
                  Total Library <strong> &#x2197;</strong> 8%{" "}
                </p>
                <h2>1000+ </h2>
                <p>
                  {" "}
                  Increase Of <strong className={styles.strong}> 126 </strong>
                  This Month
                </p>
              </div>

              <div className={`${styles.herocards} ${styles.fourthCard}`}>
                <h2>
                  {" "}
                  <strong className={styles.strgh2}> 6+ </strong>{" "}
                </h2>
                <p className={styles.genrie}>Generies Explored </p>
                <ul className={styles.fourthCardUl}>
                  {/* Generies Explored */}
                  <li className={styles.fourthCardLi}>Sci-fi</li>
                  <li className={styles.fourthCardLi}>History</li>
                  <li className={styles.fourthCardLi}>Fiction</li>
                  <li className={styles.fourthCardLi}>Romance</li>
                </ul>
              </div>

              <div className={`${styles.herocards} ${styles.fifthCard}`}>
                <SiTimescale
                  color="#82814c"
                  size={24}
                  className={styles.icon3}
                />
                <ul className={styles.fifthCardUl}>
                  <p className={styles.fifthCardP}>Goals</p>
                  <li className={styles.fifthCardLi}>
                    {" "}
                    Achieve Optimal Effficiency
                  </li>
                  <li className={styles.fifthCardLi}> Boast Your Knowledge</li>
                  <li className={styles.fifthCardLi}>
                    {" "}
                    Accuracy And Userfriendly Access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FeaturedSection />

        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
