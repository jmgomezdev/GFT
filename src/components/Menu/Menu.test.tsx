import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";

describe("Menu", () => {
  it("renders the title", () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    const titleElement = screen.getByText("Podcaster");
    expect(titleElement).toBeDefined();
  });

  it("renders the link to the home page", () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole("link", { name: "Podcaster" });
    expect(linkElement?.getAttribute("href")).toBe("/");
  });
});
