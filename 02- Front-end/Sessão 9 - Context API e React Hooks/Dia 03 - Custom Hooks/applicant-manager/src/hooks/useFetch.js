import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    fetch(url)
      .then((result) => result.json())
      .then((Data) => setData(Data.results))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data, loading, error, fetchData,
  };
};

export default useFetch;
