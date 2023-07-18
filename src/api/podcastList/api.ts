import axios from "axios";

export const URL_PODCAST_LIST =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
export const KEY_PODCAST_LIST = "PodcastList";

export const getPodcastsList = ({ signal }: { signal: AbortSignal }) =>
  axios
    .get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        URL_PODCAST_LIST
      )}`,
      {
        signal,
      }
    )
    .then(({ data }) => {
      return JSON.parse(data?.contents);
    });
