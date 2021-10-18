import { useState, useCallback } from "react";

export function useHttp(requestFunction) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(() => {
    setIsLoading(true);
    setError(false);
    requestFunction()
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setError(true);
      });
  }, [requestFunction]);

  return { isLoading, error, sendRequest, data };
}
