import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import styles from "./PodcastTable.module.css";

interface PodcastTableProps {
  id: number;
  title: string;
  date: string;
  duration: string;
}

export default function PodcastTable({
  podcasts,
}: {
  podcasts: PodcastTableProps[];
}) {
  return (
    <section className={styles.section}>
      <div className={cn(styles.card, "card")}>
        <h3 className={styles.title}>Episodes: {podcasts.length ?? 0}</h3>
      </div>
      <div className={cn(styles.card, "card")}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            {/* I use index as key because is a static list (no order, no delete, no add...) */}
            {podcasts.map((episode, index) => (
              <tr key={index}>
                <td>
                  <Link to={`episode/${episode.id}`}>{episode.title}</Link>
                </td>
                <td>{episode.date}</td>
                <td>{episode.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
