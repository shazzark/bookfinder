import styles from "./Product.module.css";
import Logo from "../components/Logo";
import { GENRES, fetchBookByGenre } from "../Api/Gutendex";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";

function Product() {
  // State for books and pagination
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [Opengenres, setOpenGenre] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const booksPerPage = 3;

  // Bookmark state
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });
  const [showBookmarks, setShowBookmarks] = useState(false);

  // Calculate current books to display
  const currentBooks = allBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );
  const totalPages = Math.ceil(allBooks.length / booksPerPage);

  const isOpen = Opengenres;
  const toggleOpen = () => {
    setOpenGenre(!isOpen);
  };

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleGenreClick = async (genre) => {
    setSelectedGenre(genre);
    setShowBookmarks(false);
    fetchBooks(genre);
  };

  const fetchBooks = async (genre) => {
    setLoading(true);
    try {
      const booksData = await fetchBookByGenre(genre);
      setAllBooks(booksData);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching books:", error);
      setAllBooks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleBookmark = (book) => {
    if (isBookmarked(book.id)) {
      removeBookmark(book.id);
    } else {
      addBookmark(book);
    }
  };

  const addBookmark = (book) => {
    setBookmarks((prev) => [...prev, book]);
  };

  const removeBookmark = (bookId) => {
    setBookmarks((prev) => prev.filter((book) => book.id !== bookId));
  };

  const isBookmarked = (bookId) => {
    return bookmarks.some((book) => book.id === bookId);
  };

  const handleShowBookmarks = () => {
    setShowBookmarks(!showBookmarks);
    if (!showBookmarks) {
      setAllBooks(bookmarks);
      setSelectedGenre("Bookmarks");
    } else if (selectedGenre && selectedGenre !== "Bookmarks") {
      fetchBooks(selectedGenre);
    }
  };

  useEffect(() => {
    if (selectedGenre && selectedGenre !== "Bookmarks") {
      fetchBooks(selectedGenre);
    }
  }, [selectedGenre]);

  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <div className={styles.grid2cols}>
          <div className={styles.firstGrid}>
            <div className={styles.boreder}>
              <Logo />
            </div>
            <ul onClick={toggleOpen}>
              <li>
                <div className={styles.diviconnav}>
                  <FaHome className={styles.icon} />
                  <NavLink to="/">Home</NavLink>
                </div>
              </li>

              <li>
                <div
                  className={styles.diviconnav}
                  onClick={handleShowBookmarks}
                >
                  <FaBookmark className={styles.icon} />
                  Bookmark {bookmarks.length > 0 && `(${bookmarks.length})`}
                </div>
              </li>

              <li>
                <div className={styles.diviconnav}>
                  <MdLanguage className={styles.icon} />
                  Genres
                </div>
              </li>
              {isOpen &&
                GENRES.map((genre, index) => (
                  <li
                    className={styles.padding}
                    key={index}
                    onClick={() => handleGenreClick(genre)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={styles.display}>
                      <IoBook className={styles.icon2} />
                      {genre}
                    </div>
                  </li>
                ))}

              <li>
                <div className={styles.diviconnav}>
                  <IoIosCall className={styles.icon} />
                  <NavLink to="/Contact">contact</NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.secondGrid}>
            <div className={styles.headindContainer}>
              <h2>
                {showBookmarks
                  ? `Your Bookmarked Books (${bookmarks.length})`
                  : selectedGenre
                  ? `Books in ${selectedGenre} (page ${currentPage} of ${totalPages})`
                  : "Select a genre to see books"}
              </h2>
            </div>

            {loading ? (
              <div className={styles.loading}>Loading books ...</div>
            ) : (
              <div className={styles.grid3cols}>
                {currentBooks.length > 0 ? (
                  currentBooks.map((book) => (
                    <div key={book.id} className={styles.bookCard}>
                      <div className={styles.titlecontainer}>
                        <h3>{book.title}</h3>
                      </div>
                      <div className={styles.rating}>
                        <CiStar className={styles.ratingIcon} />
                        <CiStar className={styles.ratingIcon} />
                        <CiStar className={styles.ratingIcon} />
                        <CiStar className={styles.ratingIcon} />
                        <CiStar className={styles.ratingIcon} />
                      </div>
                      {book.formats["image/jpeg"] && (
                        <div className={styles.bookContainer}>
                          <img
                            src={book.formats["image/jpeg"]}
                            alt={book.title}
                            className={styles.bookImage}
                          />
                        </div>
                      )}
                      <div className={styles.bookActions}>
                        <Link
                          className={styles.btna}
                          to={`/Preview/${book.id}`}
                          state={{ book }}
                        >
                          Preview Now
                        </Link>

                        {isBookmarked(book.id) ? (
                          <FaBookmark
                            className={`${styles.bookActionsIcon} ${styles.bookmarked}`}
                            onClick={() => toggleBookmark(book)}
                          />
                        ) : (
                          <CiBookmark
                            className={styles.bookActionsIcon}
                            onClick={() => toggleBookmark(book)}
                          />
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    {showBookmarks
                      ? "You haven't bookmarked any books yet"
                      : selectedGenre
                      ? "No books found for this genre"
                      : "Please select a genre to see books"}
                  </div>
                )}
              </div>
            )}

            {selectedGenre && allBooks.length > 0 && (
              <div className={styles.pagination}>
                <div className={styles.grid2div}>
                  <button
                    className={styles.btn}
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className={styles.btn}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
