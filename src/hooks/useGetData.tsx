import { useEffect, useRef, useState } from "react";

type useGetDataProps = {
  key: string;
  fn: CallableFunction;
  args?: object;
};

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

export default function useGetData<T>({ key, fn, args }: useGetDataProps): {
  loading: boolean;
  value: T;
} {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(() => getDataLocalStorage(key));
  const cacheDate = useRef(getDataLocalStorage(`${key}_cacheDate`));

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (new Date() > new Date(cacheDate.current)) {
      setLoading(true);
      fn({ ...args, signal })
        .then((data: T) => {
          localStorage.setItem(key, JSON.stringify(data));
          localStorage.setItem(
            `${key}_cacheDate`,
            JSON.stringify(dateAddDays(new Date(), 1))
          );
          setValue(data);
          setLoading(false);
        })
        .catch(() => {
          if (!signal.aborted) {
            setLoading(false);
          }
        });
    }
    return () => {
      controller.abort();
    };
  }, [fn, key, cacheDate]);

  return { loading, value };
}
