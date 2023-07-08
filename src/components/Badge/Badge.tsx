import { ReactNode } from "react";
import styles from "./Badge.module.css";

export default function Badge({ children }: { children: ReactNode }) {
  return <span className={styles.badge}>{children}</span>;
}
