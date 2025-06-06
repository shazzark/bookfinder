import { useParams, Link } from "react-router-dom";
import Logo from "../components/Logo";
import styles from "./preview.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { fetchBookDetails } from "../Api/Gutendex";
import { useEffect, useState } from "react";

function Preview() {
  const { bookId } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const [content, setContent] = useState("Loading book content...");

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookDetails(bookId);
      setBook(bookData);
      setLoading(false);

      let textUrl = null;
      const formats = bookData.formats;

      for (const [key, url] of Object.entries(formats)) {
        if (
          (key.startsWith("text/plain") || key === "text/html") &&
          url.includes("/files/") &&
          url.endsWith(".txt")
        ) {
          textUrl = url;
          break;
        }
      }

      if (!textUrl) {
        textUrl =
          formats["text/plain; charset=utf-8"] ||
          formats["text/plain"] ||
          formats["text/plain; charset=us-ascii"] ||
          formats["text/html"];
      }

      if (
        textUrl &&
        textUrl.includes("/ebooks/") &&
        !textUrl.includes("/files/")
      ) {
        const bookIdMatch = textUrl.match(/\/ebooks\/(\d+)/);
        if (bookIdMatch) {
          const id = bookIdMatch[1];
          textUrl = `https://www.gutenberg.org/files/${id}/${id}-0.txt`;
        }
      }

      if (textUrl) {
        try {
          const proxyUrl =
            "http://localhost:5000/proxy?url=" + encodeURIComponent(textUrl);

          console.log("Available formats:", bookData.formats);
          console.log("Using textUrl:", textUrl);

          const response = await fetch(proxyUrl);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const text = await response.text();
          setContent(text.slice(0, 5000));
        } catch (error) {
          console.error("Content fetch failed:", error);
          setContent(`Failed to load content: ${error.message}`);
        }
      } else {
        setContent("No readable content available.");
      }
    }

    loadBook(); // <== CALL IT HERE!
  }, [bookId]);

  if (loading) return <p>Loading...</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <main>
      <section className={styles.sectionPreview}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <div className={styles.genreListContainer}>
          <Link to="/" className={styles.backLink}>
            <IoMdArrowBack className={styles.icon} />
            <p>Back to genre</p>
          </Link>
          <p className={styles.pel}>Book Details</p>
        </div>

        <div className={styles.container}>
          <div className={styles.grid2cols}>
            <div>
              <img
                src={book.formats?.["image/jpeg"] || "/placeholder-cover.jpg"}
                alt={book.title}
                className={styles.bookCover}
              />
              <h2>{book.title}</h2>
              <p>
                <strong>Author:</strong>{" "}
                {book.authors?.[0]?.name || "Unknown Author"}
              </p>
              <p>
                <strong>Subjects:</strong>{" "}
                {book.subjects?.join(", ") || "No subjects listed"}
              </p>
            </div>

            <div className={styles.textPreview}>
              <h3>Excerpt</h3>
              <pre className={styles.bookText}>{content}</pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Preview;
