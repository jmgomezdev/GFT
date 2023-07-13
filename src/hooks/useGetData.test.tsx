import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import useGetData from "./useGetData";

vi.mock("axios");

describe("useGetData", () => {
  const mockData = { test: "data" };
  const mockUrl = "https://example.com/data";
  const mockKey = "testKey";

  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the cached data if it exists and is not expired", () => {
    const mockCacheDate = new Date(
      Date.now() + 1000 * 60 * 60 * 24
    ).toISOString();
    localStorage.setItem(mockKey, JSON.stringify(mockData));
    localStorage.setItem(`${mockKey}_cacheDate`, JSON.stringify(mockCacheDate));
    const { result } = renderHook(() => useGetData(mockKey, mockUrl));
    expect(result.current.value).toEqual(mockData);
    expect(result.current.loading).toBe(false);
  });

  it("fetches the data from the API if the cache does not exist", async () => {
    // @ts-ignore
    axios.get.mockResolvedValueOnce({ data: mockData });
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetData(mockKey, mockUrl)
    );
    expect(result.current.value).toBeNull();
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.value).toEqual(mockData);
    expect(result.current.loading).toBe(false);
  });

  it("handles errors when fetching data from the API", async () => {
    // @ts-ignore
    axios.get.mockRejectedValueOnce(new Error("Test Error"));
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetData(mockKey, mockUrl)
    );
    expect(result.current.value).toBeNull();
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.value).toBeNull();
    expect(result.current.loading).toBe(false);
  });
});
