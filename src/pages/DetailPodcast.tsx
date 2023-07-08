import { results } from "@/api/podcastDetail/mock.json";
import { feed } from "@/api/podcastList/mock.json";
import { PodcastTable } from "@/components/PodcastTable";
import { Profile } from "@/components/Profile";
import { dateFormatter, timeFormatter } from "@/lib/utils";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const podcastsList = results.map((podcast) => ({
  id: podcast.trackId,
  title: podcast.trackName,
  date: dateFormatter.format(new Date(podcast.releaseDate)),
  duration: timeFormatter.format(new Date(podcast.trackTimeMillis)),
}));

export default function DetailPodcast() {
  const { podcastId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const validatePodcastId = z.number().int().safeParse(Number(podcastId));
    if (!validatePodcastId.success) {
      navigate("/", { replace: true });
    }
  }, [navigate, podcastId]);

  return (
    <div className="m-auto flex w-full flex-wrap items-start gap-8 lg:flex-nowrap">
      <Profile
        author={feed.entry[0]["im:artist"].label}
        description={feed.entry[0].summary.label}
        img={feed.entry[0]["im:image"][2].label}
        title={feed.entry[0]["im:name"].label}
      />
      <PodcastTable podcasts={podcastsList} />
    </div>
  );
}
