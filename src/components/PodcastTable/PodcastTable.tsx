import { Result } from "@/api/podcastDetail/types";
import { cn, dateFormatter, timeFormatter } from "@/lib/utils";
import { Link } from "react-router-dom";
import styles from "./PodcastTable.module.css";

export default function PodcastTable({ episodes }: { episodes: Result[] }) {
  return (
    <section className={styles.section}>
      <div className={cn(styles.card, "card")}>
        <h3 className={styles.title}>Episodes: {episodes?.length ?? 0}</h3>
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
            {episodes?.map((episode, index) => (
              <tr key={index}>
                <td>
                  <Link to={`episode/${episode?.trackId}`}>
                    {episode?.trackName}
                  </Link>
                </td>
                <td>
                  {dateFormatter.format(new Date(episode?.releaseDate ?? 0))}
                </td>
                <td>
                  {timeFormatter.format(
                    new Date(episode?.trackTimeMillis ?? 0)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
