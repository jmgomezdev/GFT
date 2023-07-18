import { renderHook, waitFor } from "@testing-library/react";
import useGetData from "./useGetData";

describe("useGetData", () => {
  const mockFn = vi.fn().mockResolvedValue("data");
  const mockArgs = { foo: "bar" };
  const mockKey = "testKey";

  beforeEach(() => {
    localStorage.clear();
  });

  it("should return the cached value if it exists", () => {
    localStorage.setItem(mockKey, JSON.stringify("cachedData"));
    const { result } = renderHook(() =>
      useGetData({ key: mockKey, fn: mockFn })
    );
    expect(result.current.value).toEqual("cachedData");
  });

  it("should call the provided function if the cached value does not exist", async () => {
    const { result } = renderHook(() =>
      useGetData({ key: mockKey, fn: mockFn, args: mockArgs })
    );
    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.value).toEqual("data");
      expect(mockFn).toHaveBeenCalledWith({
        ...mockArgs,
        signal: expect.any(AbortSignal),
      });
      expect(localStorage.getItem(mockKey)).toEqual(JSON.stringify("data"));
      expect(localStorage.getItem(`${mockKey}_cacheDate`)).toBeDefined();
    });
  });

  it("should not call the provided function if the cached value is still valid", async () => {
    localStorage.setItem(mockKey, JSON.stringify("cachedData"));
    localStorage.setItem(
      `${mockKey}_cacheDate`,
      JSON.stringify(new Date(Date.now() + 100000))
    );
    const { result } = renderHook(() =>
      useGetData({ key: mockKey, fn: mockFn, args: mockArgs })
    );
    expect(result.current.loading).toBe(false);
    expect(result.current.value).toEqual("cachedData");
  });
});
