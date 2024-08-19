import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
export const fetchImages = async (query, currentPage) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: "TgV7Rjx9nQy8gYwV2R-zQNBEqZQ5_WsKUf2gYVYlhxs",
      query: query,
      page: currentPage,
      per_page: 9,
    },
  });
  return response.data.results;
};
