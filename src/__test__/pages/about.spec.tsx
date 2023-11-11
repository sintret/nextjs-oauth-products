import AboutPage from "@/pages/about";
import { render, screen } from "@testing-library/react";

describe("About page", () => {
  it("should render about page", () => {
    const page = render(<AboutPage />);
    console.log(screen.getByTestId("about-page").textContent);
    expect(screen.getByTestId("about-page").textContent).toBe("About");
    expect(page).toMatchSnapshot();
  });
});
