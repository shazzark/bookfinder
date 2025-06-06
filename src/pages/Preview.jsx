import { useParams, Link } from "react-router-dom";
import Logo from "../components/Logo";
// import styles from "./Preview.module.css";
import styles from "./Preview.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { fetchBookDetails } from "../Api/Gutendex";
import { useEffect, useState } from "react";

function Preview() {
  const { bookId } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const [content, setContent] = useState("Loading book content...");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadBook() {
      try {
        const bookData = await fetchBookDetails(bookId);
        setBook(bookData);

        let textUrl = null;
        const formats = bookData.formats;

        const preferredFormats = [
          "text/plain; charset=utf-8",
          "text/plain",
          "text/plain; charset=us-ascii",
          "text/html",
        ];

        for (const format of preferredFormats) {
          if (formats[format]) {
            textUrl = formats[format];
            break;
          }
        }

        if (textUrl) {
          console.log("Original text URL:", textUrl);

          // Fix Gutenberg URL pattern
          if (
            textUrl.includes("gutenberg.org/ebooks") &&
            textUrl.endsWith(".txt.utf-8")
          ) {
            const bookIdMatch = textUrl.match(/\/ebooks\/(\d+)/);
            if (bookIdMatch) {
              const id = bookIdMatch[1];
              textUrl = `https://www.gutenberg.org/files/${id}/${id}-0.txt`;
              console.log("Converted text URL:", textUrl);
            }
          }

          try {
            // Try direct fetch
            console.log("Attempting direct fetch:", textUrl);
            const directResponse = await fetch(textUrl, {
              redirect: "follow",
            });

            if (directResponse.ok) {
              const text = await directResponse.text();
              setContent(
                text.slice(0, 5000) + (text.length > 5000 ? "..." : "")
              );
              return;
            }
          } catch (err) {
            console.warn("Direct fetch failed, falling back to proxy");
          }

          // Use proxy as fallback
          console.log("Trying proxy fetch...");
          const proxyUrl =
            "http://localhost:5000/proxy?url=" + encodeURIComponent(textUrl);

          const proxyResponse = await fetch(proxyUrl);

          if (!proxyResponse.ok) {
            throw new Error(
              `Proxy failed with status: ${proxyResponse.status}`
            );
          }

          const text = await proxyResponse.text();
          setContent(text.slice(0, 5000) + (text.length > 5000 ? "..." : ""));
        } else {
          setError("No readable format available.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError(`Failed to load content: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    loadBook();
  }, [bookId]);

  if (loading)
    return <div className={styles.loading}>Loading book details...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!book) return <div className={styles.error}>Book not found.</div>;

  return (
    <main className={styles.main}>
      <section className={styles.sectionPreview}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <div className={styles.navContainer}>
          <Link to="/" className={styles.backLink}>
            <IoMdArrowBack className={styles.icon} />
            <span>Back to genre</span>
          </Link>
          <h1 className={styles.pageTitle}>Book Details</h1>
        </div>

        <div className={styles.container}>
          <div className={styles.gridContainer}>
            <div className={styles.bookDetails}>
              <img
                src={book.formats?.["image/jpeg"] || "/placeholder-cover.jpg"}
                alt={`Cover of ${book.title}`}
                className={styles.bookCover}
                onError={(e) => {
                  e.target.src = "/placeholder-cover.jpg";
                }}
              />
              <div className={styles.bookMeta}>
                <h2 className={styles.bookTitle}>{book.title}</h2>
                <p className={styles.bookAuthor}>
                  <strong>Author:</strong>{" "}
                  {book.authors?.map((a) => a.name).join(", ") ||
                    "Unknown Author"}
                </p>
                {book.subjects?.length > 0 && (
                  <div className={styles.bookSubjects}>
                    <strong>Subjects:</strong>
                    <div className={styles.subjectTags}>
                      {book.subjects.slice(0, 5).map((subject, index) => (
                        <span key={index} className={styles.subjectTag}>
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {book.bookshelves?.length > 0 && (
                  <div className={styles.bookShelves}>
                    <strong>Bookshelves:</strong>
                    <div className={styles.shelfTags}>
                      {book.bookshelves.slice(0, 3).map((shelf, index) => (
                        <span key={index} className={styles.shelfTag}>
                          {shelf}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {book.download_count && (
                  <p className={styles.downloadCount}>
                    <strong>Downloads:</strong>{" "}
                    {book.download_count.toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.bookContent}>
              <h3 className={styles.excerptTitle}>Excerpt</h3>
              <div className={styles.contentScroll}>
                <pre className={styles.bookText}>{content}</pre>
                {content.endsWith("...") && (
                  <p className={styles.contentNote}>
                    Content truncated - download full text to read more
                  </p>
                )}
              </div>
              {book.formats && (
                <div className={styles.downloadLinks}>
                  <h4>Download Options:</h4>
                  <div className={styles.formatLinks}>
                    {Object.entries(book.formats)
                      .filter(
                        ([format]) =>
                          format.startsWith("text/") ||
                          format.includes("epub") ||
                          format.includes("pdf")
                      )
                      .slice(0, 5)
                      .map(([format, url]) => (
                        <a
                          key={format}
                          href={url}
                          className={styles.formatLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {format.split(";")[0]}
                        </a>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Preview;
