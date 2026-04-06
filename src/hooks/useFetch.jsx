import { useEffect, useState } from "react";
import { API_OPTIONS } from "../constants/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const get = async () => {
      try {
        setLoading(true);
        let res = await fetch(url, {...API_OPTIONS, signal});

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: res.statusText || "Ocurrió un error",
          };
        }
        let data = await res.json();
        setData(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    get();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
