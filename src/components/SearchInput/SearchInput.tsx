import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import styles from "./SearchInput.module.css";

interface Props {
  placeholder: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function SearchInput({ placeholder, setSearch }: Props) {
  const debounceRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      setSearch(event.target.value);
    }, 250);
  };

  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <svg
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="search"
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}
