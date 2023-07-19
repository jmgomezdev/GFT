import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailEpisode from "./DetailEpisode";

vi.mock("@/api/podcastDetail/api", () => ({
  getPodcastDetail: vi.fn(() =>
    Promise.resolve({
      results: [
        {
          trackId: 1,
          trackName: "Episode 1",
          description: "Description 1",
          shortDescription: "Short description 1",
          episodeUrl: "https://example.com/episode1",
        },
        {
          trackId: 2,
          trackName: "Episode 2",
          description: "Description 2",
          shortDescription: "Short description 2",
          episodeUrl: "https://example.com/episode2",
        },
      ],
    })
  ),
  KEY_PODCAST_DETAIL: "test-key",
}));

describe("DetailEpisode component", () => {
  it("renders the correct episode", async () => {
    const episodeId = "1";
    const podcastId = "123";

    render(
      <MemoryRouter
        initialEntries={[`/podcasts/${podcastId}/episodes/${episodeId}`]}
      >
        <Routes>
          <Route
            path="/podcasts/:podcastId/episodes/:episodeId"
            element={<DetailEpisode />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText("Episode 1")).toBeDefined();
    expect(screen.getByText("Description 1")).toBeDefined();

    const audioElement = screen.getByTestId("audio-player");
    expect(audioElement).toBeDefined();
    const sourceElement = audioElement.querySelector("source");
    expect(sourceElement).toBeDefined();
    expect(sourceElement?.getAttribute("src")).toBe(
      "https://example.com/episode1"
    );
  });

  it("redirects to home page if episode id is invalid", async () => {
    const episodeId = "invalid";
    const podcastId = "123";
    render(
      <MemoryRouter
        initialEntries={[`/podcasts/${podcastId}/episodes/${episodeId}`]}
      >
        <Routes>
          <Route
            path="/podcasts/:podcastId/episodes/:episodeId"
            element={<DetailEpisode />}
          />
          <Route path="/" element={<span>Home page</span>} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Home page")).toBeDefined();
  });
});
