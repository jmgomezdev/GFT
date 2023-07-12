import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";

const DetailPodcast = lazy(() => import("@/pages/DetailPodcast"));
const DetailEpisode = lazy(() => import("@/pages/DetailEpisode.tsx"));
const ListEpisode = lazy(() => import("@/pages/ListEpisode.tsx"));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/podcast/:podcastId/" element={<DetailPodcast />}>
        <Route path="episode/:episodeId" element={<DetailEpisode />} />
        <Route path="" element={<ListEpisode />} />
      </Route>
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
