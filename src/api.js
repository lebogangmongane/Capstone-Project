import axios from 'axios';

const fetchBooks = async (query) => {
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10`);
    return response.data.docs;
  } catch (error) {
    console.error("Error fetching books", error);
    throw error;
  }
};

const fetchBookDetails = async (workId) => {
  try {
    const response = await axios.get(`https://openlibrary.org/works/${workId}.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book details", error);
    throw error;
  }
};

export { fetchBooks, fetchBookDetails };
