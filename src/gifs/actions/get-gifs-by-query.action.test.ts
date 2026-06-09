import { describe, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";

describe("getGifsByQuery", () => {
  test("should return a list of gifts", async () => {
    const gifs = await getGifsByQuery("Goku");
    console.log(gifs);
    
  });
});
