import { dateFormatter, timeFormatter } from "@/lib/utils";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ListEpisode from "./ListEpisode";

vi.mock("@/api/podcastDetail/api", () => ({
  getPodcastDetail: vi.fn(() =>
    Promise.resolve({
      results: [
        {
          trackId: "1",
          trackName: "Episode 1",
          releaseDate: "2023-05-27T09:00:00Z",
          trackTimeMillis: 2696000,
        },
        {
          trackId: "2",
          trackName: "Episode 2",
          releaseDate: "2023-06-30T09:00:00Z",
          trackTimeMillis: 1570000,
        },
      ],
    })
  ),
  KEY_PODCAST_DETAIL: "test-key",
}));

describe("ListEpisode component", () => {
  it("renders the correct episodes", async () => {
    const podcastId = "934552872";

    render(
      <MemoryRouter initialEntries={[`/podcasts/${podcastId}/episodes`]}>
        <Routes>
          <Route
            path="/podcasts/:podcastId/episodes"
            element={<ListEpisode />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Loading...")).toBeDefined();

    expect(await screen.findByText("Episode 1")).toBeDefined();
    expect(screen.getByText("Episode 2")).toBeDefined();
    expect(
      screen.getByText(dateFormatter.format(new Date("2023-06-30T09:00:00Z")))
    ).toBeDefined();
    expect(
      screen.getByText(timeFormatter.format(new Date(1570000)))
    ).toBeDefined();
  });
});
