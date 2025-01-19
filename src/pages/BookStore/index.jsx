import React from "react";
import { useBooksStore } from "./useBookStore";
import QuestionLayout from "../../layouts/QuestionLayout"; 
import "./index.css";

const BookStore = () => {
  const { displayBooks, setCurrentPage, navigationDisabled, setSearchInput } = useBooksStore();

  if (!displayBooks.length) {
    return <div>Loading...</div>;
  }

  return (
    <QuestionLayout title="Book Store">
      <nav>
        <input placeholder="Search Book" onChange={e => setSearchInput(e.target.value)} />
        <button>Add New Book</button> {/* Implement or disable if not used */}
      </nav>
      <div className="bookListContainer">
        {displayBooks.map(book => (
          <div key={book.title} className="bookList">
            <div className="title">
              {book.title} <span>Published On: {book.first_publish_year}</span>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <button disabled={navigationDisabled.prev} onClick={() => setCurrentPage(prev => prev - 1)}>Previous</button>
        <button disabled={navigationDisabled.next} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
      </footer>
    </QuestionLayout>
  );
};

export { BookStore };
