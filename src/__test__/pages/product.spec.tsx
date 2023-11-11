import ProductPage from "@/pages/product";
import { render, screen } from "@testing-library/react";

// jest.mock('next/router', () => {
//   return {
//     useRouter() {
//       return {
//         query: {}
//       }
//     }
//   }
// })

describe("Product page", () => {
  it("should render product page", () => {
    const page = render(<ProductPage />);
    // console.log(screen.getByTestId("about-page").textContent);
    // expect(screen.getByTestId("about-page").textContent).toBe("About");
    expect(page).toMatchSnapshot();
  });
});
