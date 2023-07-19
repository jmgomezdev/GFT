import { feed } from "@/api/podcastList/mock.json";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import Main from "./Main";

vi.mock("@/api/podcastList/api", () => ({
  getPodcastsList: vi.fn(() => Promise.resolve({ feed })),
  KEY_PODCAST_LIST: "test-key",
}));

vi.mock("axios");

describe("Main component", () => {
  beforeEach(() => {
    vi.mocked(axios.get).mockReset();
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
  });
  it("renders the correct podcasts of mock", async () => {
    expect(screen.getByText("Loading...")).toBeDefined();

    await waitFor(() => {
      expect(screen.getByText("8")).toBeDefined();
      expect(screen.getByText("Drink Champs")).toBeDefined();
    });
  });

  it("filter podcast correctly", async () => {
    const searchInput = screen.getByPlaceholderText(
      "Filter podcasts..."
    ) as HTMLInputElement;
    expect(searchInput).toBeDefined();

    await waitFor(
      async () => {
        const title = feed.entry[1]["im:name"].label;
        await fireEvent.change(searchInput, { target: { value: title } });
        expect(searchInput.value).toBe(title);
        expect(await screen.findByText(title)).toBeDefined();
      },
      { timeout: 3000 }
    );
  });
});
