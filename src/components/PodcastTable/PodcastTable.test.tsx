import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PodcastTable from "./PodcastTable";

describe("PodcastTable", () => {
  const episodes = [
    {
      id: 1,
      title: "Test Episode 1",
      date: "2023-07-04T09:00:00Z",
      duration: 3600000,
    },
    {
      id: 2,
      title: "Test Episode 2",
      date: "2023-07-05T09:00:00Z",
      duration: 1800000,
    },
  ];

  it("renders the episode count", () => {
    render(
      <MemoryRouter>
        <PodcastTable episodes={episodes} />
      </MemoryRouter>
    );
    const titleElement = screen.getByText("Episodes: 2");
    expect(titleElement).toBeDefined();
  });

  it("renders the episode table with the correct data", () => {
    render(
      <MemoryRouter>
        <PodcastTable episodes={episodes} />
      </MemoryRouter>
    );
    const episode1LinkElement = screen.getByRole("link", {
      name: "Test Episode 1",
    });
    expect(episode1LinkElement?.getAttribute("href")).toBe("/episode/1");

    const episode1DateElement = screen.getByText("04/07/2023");
    expect(episode1DateElement).toBeDefined();

    const episode1DurationElement = screen.getByText("1:00:00");
    expect(episode1DurationElement).toBeDefined();

    const episode2LinkElement = screen.getByRole("link", {
      name: "Test Episode 2",
    });
    expect(episode2LinkElement?.getAttribute("href")).toBe("/episode/2");

    const episode2DateElement = screen.getByText("05/07/2023");
    expect(episode2DateElement).toBeDefined();

    const episode2DurationElement = screen.getByText("0:30:00");
    expect(episode2DurationElement).toBeDefined();
  });
});
