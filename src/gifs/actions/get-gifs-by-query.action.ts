import { giphyApi } from "../api/giphy.api";

import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>(
    `/search`,
    {
      params: {
        q: query,
        limit: 10,
      },
    },
  );
  

  return response.data.data.map ((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));
};

//
//   fetch(
//     `https://api.giphy.com/v1/gifs/search?api_key=uCFd8nWJBpGyNfVjW36HfhD2cj91GdJr&q=${query}&limit=10&lang=es`,
//   );
// };

//  https://api.giphy.com/v1/gifs/search?api_key=&q=&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips

// https://api.giphy.com/v1/gifs/search?api_key=&q=&limit=25&lang=en
