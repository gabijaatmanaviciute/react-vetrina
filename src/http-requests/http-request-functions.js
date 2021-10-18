import axios from "axios";

// export const httpRequest = async (method, url, data) => {
//   return await axios({ method: method, url: url, data: data });
// };

// NEWS API:
const NEWS_API_KEY = "5a200fbc39434849a235997066684175";

export const getNewsArticles = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "https://newsapi.org/v2/everything",
      params: {
        q: "apple",
        pageSize: 8,
        from: "2021-10-12",
        to: "2021-10-18",
        sortBy: "popularity",
        apiKey: NEWS_API_KEY,
      },
    });
    // console.log("axios response ", response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// UNSPLASH API:
const UNSPLASH_API_KEY = "DmfUYu2V28I90av_meseyUaMnkRmsn_7rBZKlki6qfk";

export const getImages = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "https://api.unsplash.com/search/photos",
      params: {
        page: 1,
        per_page: 4,
        query: "smartphone",
        client_id: UNSPLASH_API_KEY,
      },
    });
    // console.log("axios response ", response);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
