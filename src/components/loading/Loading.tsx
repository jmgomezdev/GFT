import { Loader } from "lucide-react";
import styles from "./Loading.module.css";

export default function Loading() {
  return <Loader className={styles.loading} />;
}
