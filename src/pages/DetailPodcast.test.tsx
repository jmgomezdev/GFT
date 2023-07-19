import { feed } from "@/api/podcastList/mock.json";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailPodcast from "./DetailPodcast";

vi.mock("@/api/podcastList/api", () => ({
  getPodcastsList: vi.fn(() => Promise.resolve({ feed })),
  KEY_PODCAST_LIST: "test-key",
}));

describe("DetailPodcast component", () => {
  it("renders the correct podcast", async () => {
    const podcastId = "1535809341";

    render(
      <MemoryRouter initialEntries={[`/podcasts/${podcastId}`]}>
        <Routes>
          <Route path="/podcasts/:podcastId" element={<DetailPodcast />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText("The Joe Budden Podcast")).toBeDefined();
    expect(screen.getByText("The Joe Budden Network")).toBeDefined();
    expect(
      screen.getByText(
        "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."
      )
    ).toBeDefined();
  });

  it("redirects to home page if podcast id is invalid", async () => {
    const podcastId = "invalid";

    render(
      <MemoryRouter initialEntries={[`/podcasts/${podcastId}`]}>
        <Routes>
          <Route path="/podcasts/:podcastId" element={<DetailPodcast />} />
          <Route path="/" element={<span>Home page</span>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Home page")).toBeDefined();
  });
});
