import axios from "axios";

export const KEY_PODCAST_DETAIL = "PodcastDetail";
export const URL_PODCAST_DETAIL =
  "https://itunes.apple.com/lookup?media=podcast&entity=podcastEpisode&limit=20";

export const getPodcastDetail = ({
  id,
  signal,
}: {
  id: string;
  signal: AbortSignal;
}) =>
  axios
    .get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `${URL_PODCAST_DETAIL}&id=${id}`
      )}`,
      {
        signal,
      }
    )
    .then(({ data }) => {
      return JSON.parse(data?.contents);
    });
