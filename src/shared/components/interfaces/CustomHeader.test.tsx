import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "../CustomHeader";

describe("CustomHeader", () => {
  const title = "Test Title";

  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />);

    expect(screen.getByText(title)).toBeDefined;
    // screen.debug();
  });
  test("should render the description when provider ", () => {
    const description = "Test Description";

    render(<CustomHeader title={title} description={description} />);

    // screen.debug();


    expect(screen.getByText((description))).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });
  test("should render the description when not provider", () => {

    const {container} = render(<CustomHeader title={title} />)

    const divElement = container.querySelector('.conten-center')

    const h1 = divElement?.querySelector('h1');
    
    expect(h1?.innerHTML).toBe(title);

    // screen.debug();

    //container = render()
  });
});
