import { results } from "@/api/podcastDetail/mock.json";
import { feed } from "@/api/podcastList/mock.json";
import { Episode } from "@/components/Episode";
import { Profile } from "@/components/Profile";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

export default function DetailEpisode() {
  const { podcastId, episodeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const validatePodcastId = z.number().int().safeParse(Number(podcastId));
    const validateEpisodeId = z.number().int().safeParse(Number(episodeId));
    if (!validatePodcastId.success || !validateEpisodeId.success) {
      navigate("/", { replace: true });
    }
  }, [navigate, podcastId, episodeId]);

  return (
    <div className="m-auto flex w-full flex-wrap items-start gap-8 lg:flex-nowrap">
      <Profile
        author={feed.entry[0]["im:artist"].label}
        description={feed.entry[0].summary.label}
        img={feed.entry[0]["im:image"][2].label}
        title={feed.entry[0]["im:name"].label}
        url={`/podcast/${podcastId}`}
      />
      <Episode
        title={results[2].trackName}
        description={results[2].description}
        url={results[2].episodeUrl}
      />
    </div>
  );
}
