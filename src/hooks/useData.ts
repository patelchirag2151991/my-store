import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const useData = (endpoint: string, customConfig?: any, deps?: []) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get(endpoint, customConfig)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    },
    deps ? deps : []
  );

  return { data, error, isLoading };
};

export default useData;
