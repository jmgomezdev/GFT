import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const DetallePodcast = lazy(() => import("@/pages/DetallePodcast.jsx"));
const DetalleEpisode = lazy(() => import("@/pages/DetalleEpisode.jsx"));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
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
