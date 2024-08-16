import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  user: { name: string };
  created_at: number;
  likes: number;
};

type ResponseData = {
  results: Image[];
  total_pages: number;
};
export default async function fetchImages(query: string, currentPage: number) {
  const result = await axios.get<ResponseData>(`/search/photos`, {
    params: {
      query: query,
      page: currentPage,
      per_page: 9,
      client_id: "xpSRSmDQWhP5U1mXscZhRKuLWymNxqd_rVhUFDssqgs",
      orientation: "landscape",
    },
  });
  return result.data;
}
