import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
  test("should render the componnt", () => {
    render(<MyCounterApp />);
    screen.debug();

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      `counter: 10`,
    );

    expect(screen.getByRole('button', {name: '+1'})).toBeDefined();
    expect(screen.getByRole('button', {name: '-1'})).toBeDefined();
    expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined();
  });
});
