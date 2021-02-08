import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSearch(query, pageNumber) {
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    async function makeRequest() {
      try {
        setLoading(true);
        setError(false);
        const res = await axios({
          method: 'GET',
          url: 'http://openlibrary.org/search.json',
          params: { q: query, page: pageNumber },
        });
        setBooks((prevBooks) => [...new Set([...prevBooks, ...res.data.docs,
        ])]);
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }
    makeRequest();
  }, [query, pageNumber]);

  return (
    {
      loading, error, books, hasMore,
    });
}
