import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import styles from "./PodcastItem.module.css";

export default function PodcastItem({
  author,
  id,
  img,
  title,
}: {
  author: string;
  id: string;
  img: string;
  title: string;
}) {
  return (
    <Link to={`/podcast/${id}`}>
      <div className={cn(styles.card, "card")}>
        <img
          alt={title}
          loading="lazy"
          width="150"
          height="150"
          decoding="async"
          src={img}
        />
        <h3>{title}</h3>
        <span>Author: {author}</span>
      </div>
    </Link>
  );
}
