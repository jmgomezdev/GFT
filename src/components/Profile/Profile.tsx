import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

interface ProfileProps {
  author: string;
  description: string;
  img: string;
  title: string;
  url?: string;
}

const LinkWrapper: React.FC<{ url: string; children: ReactNode }> = ({
  url,
  children,
}) => {
  if (url === "") {
    return <>{children}</>;
  }
  return <Link to={url}>{children}</Link>;
};

export default function Profile({
  author,
  description,
  img,
  title,
  url = "",
}: ProfileProps) {
  return (
    <aside className={cn(styles.card, "card")}>
      <LinkWrapper url={url}>
        <img src={img} alt={title} className={styles.image} />
      </LinkWrapper>
      <hr className={styles.divider} />
      <div>
        <LinkWrapper url={url}>
          <h3 className={styles.title}>{title}</h3>
        </LinkWrapper>
        <LinkWrapper url={url}>
          <h4 className={styles.author}>{author}</h4>
        </LinkWrapper>
      </div>
      <hr className={styles.divider} />
      <div className={styles.description}>
        <span>Description:</span>
        <div>{description}</div>
      </div>
    </aside>
  );
}
