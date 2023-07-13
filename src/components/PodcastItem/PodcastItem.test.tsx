import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PodcastItem from "./PodcastItem";

describe("PodcastItem", () => {
  const podcast = {
    author: "Test Author",
    id: "test-id",
    img: "test-img.jpg",
    title: "Test Title",
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <PodcastItem {...podcast} />
      </MemoryRouter>
    );
  });

  it("renders the title", () => {
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeDefined();
  });

  it("renders the author", () => {
    const authorElement = screen.getByText("Author: Test Author");
    expect(authorElement).toBeDefined();
  });

  it("renders the image with the correct attributes", () => {
    const imageElement = screen.getByAltText("Test Title");
    expect(imageElement).toBeDefined();
    expect(imageElement?.getAttribute("src")).toBe("test-img.jpg");
    expect(imageElement?.getAttribute("width")).toBe("150");
    expect(imageElement?.getAttribute("height")).toBe("150");
    expect(imageElement?.getAttribute("loading")).toBe("lazy");
    expect(imageElement?.getAttribute("decoding")).toBe("async");
  });

  it("renders the link with the correct URL", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement?.getAttribute("href")).toBe("/podcast/test-id");
  });
});
