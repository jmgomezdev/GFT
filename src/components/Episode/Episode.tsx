import { cn } from "@/lib/utils";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import styles from "./Episode.module.css";

interface EpisodeProps {
  title: string;
  description?: string;
  url?: string;
}

export default function Episode({
  title,
  description = "",
  url = "",
}: EpisodeProps) {
  return (
    <section className={cn(styles.card, "card")}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>
        {parse(DOMPurify.sanitize(description))}
      </div>
      <audio data-testid="audio-player" controls className={styles.audio}>
        <source src={url} />
      </audio>
    </section>
  );
}
