// const BASE_URL = "https://gutendex.com/books";
const BASE_URL = "https://gutendex.com/books";

// const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=subject:GENRE";

// const BASE_URL = "https://gutendex.com/books/?ids=BOOK_ID";

export const GENRES = [
  "fiction",
  "drama",
  "science fiction",
  "fantasy",
  "horror",
  "mystery",
  "romance",
  "adventure",
  "history",
  "philosophy",
];

export async function fetchBookByGenre(genre) {
  try {
    const response = await fetch(`${BASE_URL}?search=${genre}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("failed to fetch books:", error);
    return [];
  }
}

export async function fetchBookDetails(bookId) {
  try {
    const response = await fetch(`${BASE_URL}/${bookId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch book details:", error);
    return null;
  }
}

export const searchBooks = async (query) => {
  try {
    const response = await fetch(
      `https://gutendex.com/books/?search=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error searching books:", error);
    return [];
  }
};
