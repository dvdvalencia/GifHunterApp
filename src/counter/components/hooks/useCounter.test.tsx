import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook } from "@testing-library/react";



describe("useCounter", () => {
  test ('should initialize whit default value of 10', () => {
    const {result} = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10)
  });
});
