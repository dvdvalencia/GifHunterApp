import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "../CustomHeader";

describe("CustomHeader", () => {
  test("should render the title correctly", () => {

    const title="Test Title"
    render (<CustomHeader title={ title } />)

    screen.debug();
    // expect CustomHeader().props
    // expect(screen.)
  });
  test("should render the description when provider ", () => {});
  test("should render the description when not provider", () => {
    //container = render()
  });
});
 