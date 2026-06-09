import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";

describe("getGifsByQuery", () => {
  test("should return a list of gifts", async () => {
    const gifs = await getGifsByQuery("Goku");
    const [gif1] = gifs;

    expect(gifs.length).toBe(10);

    // expect(gif1).toEqual({
    expect(gif1).toStrictEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
      width: expect.any(Number),
      height: expect.any(Number),
    });
    // console.log(gifs);
  });
});
