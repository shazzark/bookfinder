// const GOOGLE_BOOKS_URL =
//   "https://www.googleapis.com/books/v1/volumes?q=subject:";
const GOOGLE_BOOKS_BASE = "https://www.googleapis.com/books/v1/volumes?q=";

// Fetch books by genre/subject
export async function fetchBooksFromGoogle(subject) {
  try {
    const response = await fetch(
      `${GOOGLE_BOOKS_BASE}subject:${encodeURIComponent(subject)}&maxResults=10`
    );
    const data = await response.json();

    if (!data.items) return [];

    return data.items.map((item) => ({
      id: item.id,
      title: item.volumeInfo.title || "No title",
      authors: item.volumeInfo.authors || ["Unknown author"],
      cover: item.volumeInfo.imageLinks?.thumbnail || null,
      description: item.volumeInfo.description || "",
      source: "google",
    }));
  } catch (error) {
    console.error("Failed to fetch from Google Books:", error);
    return [];
  }
}
