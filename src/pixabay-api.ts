import axios from "axios";
import type { PixabayResponse } from "./types/pixabay";
import { PER_PAGE } from "./pagination";

const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery (query: string, page: number): Promise<PixabayResponse> {
  const response = await axios.get<PixabayResponse>(BASE_URL, {
    params: {      
      q: query,
      page,
      per_page: PER_PAGE,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      key: '54205759-a9f47d890190e18cb2c005ea4',
    },
  });
  return response.data;
};
