import { describe, expect, test } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter'

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphySearchResponseMock } from "../../tests/mocks/giphy.response.data";

import { giphyApi } from "../api/giphy.api";



// describe("getGifsByQuery", () => {
//   test("should return a list of gifts", async () => {
//     const gifs = await getGifsByQuery("Goku");
//     const [gif1] = gifs;

//     expect(gifs.length).toBe(10);

//     // expect(gif1).toEqual({
//     expect(gif1).toStrictEqual({
//       id: expect.any(String),
//       title: expect.any(String),
//       url: expect.any(String),
//       width: expect.any(Number),
//       height: expect.any(Number),
//     });
//     // console.log(gifs);
//   });
// });

describe("getGifsByQuery", () => {

  const mock = new AxiosMockAdapter(giphyApi)

  test( "should return a list of gifts", async () => {

    mock.onGet('/search').reply(200, giphySearchResponseMock)

    const gifs = await getGifsByQuery ('goku')

    expect(gifs.length).toBe(10);

    gifs.forEach(gif => {
      expect ( typeof gif.id ).toBe('string');
      expect ( typeof gif.title ).toBe('string');
      expect ( typeof gif.url ).toBe('string');

      expect ( typeof gif.width ).toBe('number');
      expect ( typeof gif.height ).toBe('number');
    })


  })

});

