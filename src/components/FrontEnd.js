/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef, useCallback } from 'react';

import { DebounceInput } from 'react-debounce-input';
import Card from './card';
import useSearch from './FetchData';
import Header from './header';

export default function SearchFunction() {
  const [query, setQuery] = useState('test');
  const [pageNumber, setPageNumber] = useState(1);

  const {
    books, hasMore, loading, error,
  } = useSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div className="container">
      <Header />
      <h5 className="search">
        Which Book You Are Looking For??:
        <DebounceInput data-testid="input-query" debounceTimeout={1000} onChange={handleSearch} placeholder="Enter the book name" />
      </h5>
      <div className="row">
        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <div ref={lastBookElementRef} />
            );
          }
          return (
            <div key={book.lcc}>
              <Card
                index={index}
                title={book.title}
                author={book.author_name}
                publishYear={book.first_publish_year}
              />
            </div>
          );
        })}
      </div>
      <div className="text-center text-muted">{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </div>
  );
}
