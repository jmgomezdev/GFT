import axios from "axios";
import { useEffect, useRef, useState } from "react";

function getDataLocalStorage(key: string) {
  try {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return null;
    //TODO: Validate values with zod
    return JSON.parse(storedValue);
  } catch (error) {
    console.error(error, "Error getting data from cache");
    return null;
  }
}

function dateAddDays(date: Date, days: number): Date {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

export default function useGetData<T>(
  key: string,
  url: string
): { loading: boolean; value: T } {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(() => getDataLocalStorage(key));
  const cacheDate = useRef(getDataLocalStorage(`${key}_cacheDate`));

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchUsers() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
          {
            signal,
          }
        );
        const allOriginsReturn = await res.data;
        const data = JSON.parse(allOriginsReturn.contents);
        //TODO: Validate data with zod
        localStorage.setItem(key, JSON.stringify(data));
        localStorage.setItem(
          `${key}_cacheDate`,
          JSON.stringify(dateAddDays(new Date(), 1))
        );
        setValue(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data from API");
        setLoading(false);
      }
    }
    if (new Date() > new Date(cacheDate.current)) {
      fetchUsers();
    }
    return () => {
      controller.abort();
    };
  }, [url, key, cacheDate]);

  return { loading, value };
}
