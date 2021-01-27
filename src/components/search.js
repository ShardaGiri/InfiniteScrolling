import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Search(query, pageNumber) {
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
        console.log(res);
        setBooks((prevBooks) => [...prevBooks, ...res.data.docs,
        ]);
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      } catch (e) {
      // eslint-disable-next-line no-console
        console.log(e);
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
