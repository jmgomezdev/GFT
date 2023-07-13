import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge", () => {
  it("renders the children", () => {
    render(<Badge>Test Badge</Badge>);
    const badgeElement = screen.getByText("Test Badge");
    expect(badgeElement).toBeDefined();
  });

  it("renders with the correct CSS class", () => {
    render(<Badge>Test Badge</Badge>);
    const badgeElement = screen.getByText("Test Badge");
    expect(badgeElement.className).toContain("badge");
  });
});
