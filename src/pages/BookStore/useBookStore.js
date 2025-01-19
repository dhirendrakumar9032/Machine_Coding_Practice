import { useEffect, useState } from "react";

const debouncing = (callback, delay = 1000) => {
  let timerId = null;
  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay);
  };
};


export const useBooksStore = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [navigationDisabled, setNavigationDisabled] = useState({ prev: true, next: false });
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("https://openlibrary.org/subjects/programming.json?limit=50");
      const data = await response.json();
      setAllBooks(data.works);
      setFilteredBooks(data.works);
      updateDisplayBooks(0, data.works);
    }
    fetchBooks();
  }, []);

  useEffect(() => {
    updateDisplayBooks(currentPage, filteredBooks);
  }, [currentPage, filteredBooks]);

  const updateDisplayBooks = (page, books) => {
    const start = page * 10;
    const end = start + 10;
    setDisplayBooks(books.slice(start, end));
    setNavigationDisabled({
      prev: page === 0,
      next: end >= books.length
    });
  };

  const handleSearch = debouncing((input) => {
    const lowercasedInput = input.toLowerCase();
    const filtered = allBooks.filter(book => book.title.toLowerCase().includes(lowercasedInput));
    setFilteredBooks(filtered);
    setCurrentPage(0); 
  });

  useEffect(() => {
    handleSearch(searchInput);
  }, [searchInput]);

  return { displayBooks, setCurrentPage, navigationDisabled, setSearchInput };
};
