import {
  KEY_PODCAST_DETAIL,
  URL_PODCAST_DETAIL,
} from "@/api/podcastDetail/api";
import { PodcastDetail } from "@/api/podcastDetail/types";
import { Episode } from "@/components/Episode";
import useGetData from "@/hooks/useGetData";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

export default function DetailEpisode() {
  const { podcastId, episodeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const validateEpisodeId = z.number().int().safeParse(Number(episodeId));
    if (!validateEpisodeId.success) {
      navigate("/", { replace: true });
    }
  }, [navigate, podcastId, episodeId]);

  const { value: episodes, loading: loadingEpisodes } =
    useGetData<PodcastDetail>(
      `${KEY_PODCAST_DETAIL}_${podcastId}`,
      `${URL_PODCAST_DETAIL}&id=${podcastId}`
    );
  if (loadingEpisodes) {
    return <span>Loading...</span>;
  }

  const dataEpisode = episodes?.results?.find(
    (episode) => episode.trackId === Number(episodeId)
  );
  if (!dataEpisode) {
    navigate("/404", { replace: true });
    return null;
  }

  return (
    <Episode
      title={dataEpisode.trackName}
      description={
        (dataEpisode?.description || dataEpisode?.shortDescription) ?? ""
      }
      url={dataEpisode?.episodeUrl ?? ""}
    />
  );
}
