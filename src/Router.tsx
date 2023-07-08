import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";

const DetallePodcast = lazy(() => import("@/pages/DetailPodcast.tsx"));
const DetalleEpisode = lazy(() => import("@/pages/DetailEpisode.tsx"));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/podcast/:podcastId" element={<DetallePodcast />} />
      <Route
        path="/podcast/:podcastId/episode/:episodeId"
        element={<DetalleEpisode />}
      />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
