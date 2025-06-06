import styles from "./FeaturedSection.module.css";
import { fetchBookByGenre, GENRES } from "../Api/Gutendex";
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FaAmericanSignLanguageInterpreting,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
function FeaturedSection() {
  const [books, setBooks] = useState([]);
  const [book2, setBook2] = useState([]);
  useEffect(() => {
    async function loadBooks() {
      const fantasyBooks = await fetchBookByGenre("science fiction");
      const mysteryBooks = await fetchBookByGenre("history");
      setBooks(fantasyBooks);
      setBook2(mysteryBooks);
    }
    loadBooks();
  });

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <span className={styles.subHeading}> Features </span>
        <h2 className={styles.secondaryHeading}>
          {" "}
          Your Gateway to Endless Reading Adventures{" "}
        </h2>
      </div>

      <div className={`${styles.container} ${styles.grid3Cols}`}>
        {books.slice(2, 3).map((book) => (
          <div key={book.id} className={styles.features}>
            {book.formats["image/jpeg"] && (
              <img
                src={book.formats["image/jpeg"]}
                alt={book.title}
                className={styles.featuresImg}
              />
            )}
            <div className={styles.featuresContent}>
              <p className={styles.featuresTitle}> {book.title}</p>
              <ul className={styles.attribute}>
                <li className={styles.featuresAttribute}>
                  <FaAmericanSignLanguageInterpreting
                    color="#82814c"
                    size={24}
                  />
                  Languages:
                  {book.languages.map((lang) => lang.toUpperCase()).join(", ")}
                </li>
                <li className={styles.featuresAttribute}>
                  <FaCloudDownloadAlt color="#82814c" size={24} />
                  Downloads: {book.download_count}
                </li>

                <li className={styles.featuresAttribute}>
                  {" "}
                  <ImLibrary color="#82814c" size={24} />
                  Genres:{" "}
                  {book.subjects && book.subjects.length > 0
                    ? book.subjects[0]
                    : "Unknown"}
                </li>
              </ul>
            </div>
          </div>
        ))}

        {book2.slice(0, 1).map((book) => (
          <div key={book.id} className={styles.features}>
            {book.formats["image/jpeg"] && (
              <img
                src={book.formats["image/jpeg"]}
                alt={book.title}
                className={styles.featuresImg}
              />
            )}
            <div className={styles.featuresContent}>
              <p className={styles.featuresTitle}> {book.title}</p>
              <ul className={styles.attribute}>
                <li className={styles.featuresAttribute}>
                  <FaAmericanSignLanguageInterpreting
                    color="#82814c"
                    size={24}
                  />
                  Languages:
                  {book.languages.map((lang) => lang.toUpperCase()).join(", ")}
                </li>
                <li className={styles.featuresAttribute}>
                  <FaCloudDownloadAlt color="#82814c" size={24} />
                  Downloads: {book.download_count}
                </li>

                <li className={styles.featuresAttribute}>
                  <ImLibrary color="#82814c" size={24} />
                  Genres:{" "}
                  {book.subjects && book.subjects.length > 0
                    ? book.subjects[0]
                    : "Unknown"}
                </li>
              </ul>
            </div>
          </div>
        ))}
        {/* <div className={styles.features}></div> */}
        <div className={styles.featuresList}>
          <h3 className={styles.h3}>Available Genre</h3>
          <ul className={styles.genresList}>
            {GENRES.map((genre) => (
              <li key={genre} className={styles.genresLists}>
                <IoMdCheckmark size={24} />
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.moreContainer}>
        <Link className={styles.button} to="/Product">
          Read More &rarr;
        </Link>
      </div>
    </section>
  );
}

export default FeaturedSection;
