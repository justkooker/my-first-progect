import { createGallery } from "../modules/gallery";

const queryOptions = {
  baseUrl: "https://www.omdbapi.com/",
  apiKey: "9eb9d26e",
};
const fetchQuery = function (query) {
  fetch(`${queryOptions.baseUrl}?apikey=${queryOptions.apiKey}&s=${query}`)
    .then((response) => response.json())
    .then((data) => createGallery(data.Search));
};

export default fetchQuery;
