import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "./Profile";

describe("Profile", () => {
  const profile = {
    author: "Test Author",
    description: "Test Description",
    img: "test-img.jpg",
    title: "Test Title",
    url: "/test-url",
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Profile {...profile} />
      </MemoryRouter>
    );
  });

  it("renders the title", () => {
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeDefined();
  });

  it("renders the author", () => {
    const authorElement = screen.getByText("Test Author");
    expect(authorElement).toBeDefined();
  });

  it("renders the image with the correct attributes", () => {
    const imageElement = screen.getByAltText("Test Title");
    expect(imageElement).toBeDefined();
    expect(imageElement?.getAttribute("src")).toBe("test-img.jpg");
  });

  it("renders the description", () => {
    const descriptionElement = screen.getByText("Test Description");
    expect(descriptionElement).toBeDefined();
  });

  it("renders the link with the correct URL", () => {
    const linkElement = screen.getByRole("link", { name: "Test Author" });
    expect(linkElement?.getAttribute("href")).toBe("/test-url");
  });
});
