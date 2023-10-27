import { useEffect, useState } from "react";

const useFetcher = ({ path = "", defaultState = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products/${path}`);
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    }

    fetchData();
  }, [path]);

  return {
    data,
    isLoading,
    // hasNoData: !data.length
  };
};

export default useFetcher;
