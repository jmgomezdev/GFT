import axios from "axios";
import { getPodcastDetail } from "./api";
import { results } from "./mock.json";

vi.mock("axios");

describe("Podcast Details Service", () => {
  beforeEach(() => {
    vi.mocked(axios.get).mockReset();
  });
  it("makes a GET request to fetch", async () => {
    const podcastDetailMock = {
      contents: JSON.stringify(results),
    };
    const controller = new AbortController();
    const signal = controller.signal;
    const idMock = "019";

    vi.mocked(axios.get).mockResolvedValue({
      data: podcastDetailMock,
    });
    const podcastDetail = await getPodcastDetail({ id: idMock, signal });

    expect(podcastDetail).toStrictEqual(results);
  });
});
