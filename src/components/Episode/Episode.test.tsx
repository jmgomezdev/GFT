import { render, screen } from "@testing-library/react";
import Episode from "./Episode";

describe("Episode", () => {
  it("renders the title", () => {
    render(<Episode title="Test Episode" />);
    const titleElement = screen.getByText("Test Episode");
    expect(titleElement).toBeDefined();
  });

  it("renders the description", () => {
    render(
      <Episode title="Test Episode" description="<p>Test description</p>" />
    );
    const descriptionElement = screen.getByText("Test description");
    expect(descriptionElement).toBeDefined();
  });

  it("renders the audio element with correct src source", () => {
    render(<Episode title="Test Episode" url="test-audio.mp3" />);
    const audioElement = screen.getByTestId("audio-player");
    expect(audioElement).toBeDefined();
    const sourceElement = audioElement.querySelector("source");
    expect(sourceElement).toBeDefined();
    expect(sourceElement?.getAttribute("src")).toBe("test-audio.mp3");
  });
});
