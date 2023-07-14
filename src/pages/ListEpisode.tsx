import {
  KEY_PODCAST_DETAIL,
  URL_PODCAST_DETAIL,
} from "@/api/podcastDetail/api";
import { PodcastDetail } from "@/api/podcastDetail/types";
import { PodcastTable } from "@/components/PodcastTable";
import useGetData from "@/hooks/useGetData";
import { useParams } from "react-router-dom";

export default function ListEpisode() {
  const { podcastId } = useParams();
  const { value: episodes, loading: loadingEpisodes } =
    useGetData<PodcastDetail>(
      `${KEY_PODCAST_DETAIL}_${podcastId}`,
      `${URL_PODCAST_DETAIL}&id=${podcastId}`
    );
  if (loadingEpisodes) {
    return <span>Loading...</span>;
  }

  const episodesData =
    episodes?.results?.map((episode) => ({
      id: episode.trackId,
      title: episode.trackName,
      date: episode.releaseDate,
      duration: episode.trackTimeMillis,
    })) ?? [];
  return <PodcastTable episodes={episodesData} />;
}
