import { getPodcastsList, KEY_PODCAST_LIST } from "@/api/podcastList/api";
import { PodcastList } from "@/api/podcastList/types";
import { Profile } from "@/components/Profile";
import useGetData from "@/hooks/useGetData";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

export default function DetailPodcast() {
  const { podcastId, episodeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const validatePodcastId = z.number().int().safeParse(Number(podcastId));
    if (!validatePodcastId.success) {
      navigate("/", { replace: true });
    }
  }, [navigate, podcastId]);

  const { value: podcast, loading: loadingPodcast } = useGetData<PodcastList>({
    key: KEY_PODCAST_LIST,
    fn: getPodcastsList,
  });

  if (loadingPodcast) {
    return <span>Loading...</span>;
  }

  const dataPocast = podcast?.feed?.entry.find(
    (podcast) => podcast.id.attributes["im:id"] === podcastId
  );
  if (!dataPocast) {
    navigate("/404", { replace: true });
    return null;
  }

  return (
    <div className="m-auto flex w-full flex-wrap items-start gap-8 lg:flex-nowrap">
      <Profile
        author={dataPocast?.["im:artist"].label}
        description={dataPocast?.summary.label}
        img={dataPocast?.["im:image"][2].label}
        title={dataPocast?.["im:name"].label}
        url={episodeId ? `/podcast/${podcastId}` : ""}
      />
      <Outlet />
    </div>
  );
}
