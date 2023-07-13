import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  const setSearch = vi.fn();

  beforeEach(() => {
    setSearch.mockClear();
    render(
      <SearchInput placeholder="Test Placeholder" setSearch={setSearch} />
    );
  });

  it("renders the input with the correct placeholder", () => {
    const inputElement = screen.getByPlaceholderText("Test Placeholder");
    expect(inputElement).toBeDefined();
  });

  it("debounces setSearch when the input changes", () => {
    vi.useFakeTimers();
    const inputElement = screen.getByPlaceholderText("Test Placeholder");
    fireEvent.change(inputElement, { target: { value: "Test Value" } });
    expect(setSearch).not.toHaveBeenCalled();
    vi.advanceTimersByTime(250);
    expect(setSearch).toHaveBeenCalledWith("Test Value");
    vi.useRealTimers();
  });
});
