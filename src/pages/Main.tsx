import { feed } from "@/api/podcastList/mock.json";
import { Badge } from "@/components/Badge";
import { PodcastItem } from "@/components/PodcastItem";
import { SearchInput } from "@/components/SearchInput";
import { sameText } from "@/lib/sameText";
import { useState } from "react";

export default function Main() {
  const [search, setSearch] = useState("");

  let podcasts = feed.entry;
  if (search !== "") {
    podcasts = feed.entry.filter((podcast) => {
      return (
        sameText(podcast.title.label, search) ||
        sameText(podcast["im:artist"].label, search)
      );
    });
  }

  return (
    <>
      <section className="ml-auto flex w-full max-w-md items-center gap-4">
        <Badge>{podcasts?.length ?? 0}</Badge>
        <SearchInput setSearch={setSearch} placeholder="Filter podcasts..." />
      </section>
      <section className="flex w-full flex-wrap justify-center gap-6 py-6 xl:gap-8 xl:py-8">
        {podcasts.map((podcast) => (
          <PodcastItem
            key={podcast.id.attributes["im:id"]}
            author={podcast["im:artist"].label}
            id={podcast.id.attributes["im:id"]}
            img={podcast["im:image"][2].label}
            title={podcast["im:name"].label}
          />
        ))}
      </section>
    </>
  );
}
