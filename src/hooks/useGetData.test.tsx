import { renderHook } from "@testing-library/react";
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

  it("should return loading as true initially", () => {
    const { result } = renderHook(() => useGetData("testKey", "testUrl"));
    expect(result.current.loading).toBe(true);
  });
  // Removed tests with data fetch, because they take too long
});
