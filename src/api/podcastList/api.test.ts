import axios from "axios";
import { getPodcastsList } from "./api";
import { feed } from "./mock.json";

vi.mock("axios");

describe("Podcast List Service", () => {
  beforeEach(() => {
    vi.mocked(axios.get).mockReset();
  });
  it("makes a GET request to fetch", async () => {
    const podcastDetailMock = {
      contents: JSON.stringify(feed),
    };
    const controller = new AbortController();
    const signal = controller.signal;

    vi.mocked(axios.get).mockResolvedValue({
      data: podcastDetailMock,
    });
    const podcastDetail = await getPodcastsList({ signal });

    expect(podcastDetail).toStrictEqual(feed);
  });
});
